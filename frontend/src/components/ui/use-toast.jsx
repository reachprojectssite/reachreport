"use client";

import { useState, useEffect, createContext, useContext } from "react";

const TOAST_LIMIT = 5;
const TOAST_REMOVE_DELAY = 1000;

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST", 
  REMOVE_TOAST: "REMOVE_TOAST",
};

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

const toastTimeouts = new Map();

let dispatchToast;

const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatchToast({
      type: actionTypes.REMOVE_TOAST,
      toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case actionTypes.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };

    case actionTypes.DISMISS_TOAST: {
      const { toastId } = action;

      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      };
    }

    case actionTypes.REMOVE_TOAST:
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

const ToastContext = createContext({});

function useToast() {
  const context = useContext(ToastContext);

  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}

function ToastProvider({ children }) {
  const [state, dispatch] = useState({ toasts: [] });

  // Set dispatch function for use in addToRemoveQueue
  dispatchToast = dispatch;

  const toast = (props) => {
    const id = genId();

    const newToast = {
      id,
      open: true,
      ...props,
    };

    dispatch({ type: actionTypes.ADD_TOAST, toast: newToast });

    return id;
  };

  const update = (id, props) => {
    dispatch({
      type: actionTypes.UPDATE_TOAST,
      toast: { ...props, id },
    });
  };

  const dismiss = (id) => {
    dispatch({ type: actionTypes.DISMISS_TOAST, toastId: id });
  };

  useEffect(() => {
    return () => {
      toastTimeouts.forEach((timeout) => {
        clearTimeout(timeout);
      });
    };
  }, []);

  return (
    <ToastContext.Provider
      value={{
        toasts: state.toasts,
        toast,
        update,
        dismiss,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export { useToast, ToastProvider };