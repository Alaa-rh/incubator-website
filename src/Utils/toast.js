import toast from 'react-hot-toast';

const defaultOptions = {
  duration: 3000,
  position: 'top-center',
  style: {
    borderRadius: '10px',
    background: '#333',
    color: '#fff',
    padding: '15px 20px',
    fontSize: '20px',
    fontWeight: '600',
    direction: 'rtl',
  },
  success: {
    icon: '✔',
    style: {
      background: '#ffff',
      color: '#43A047',
      border: '1px solid #43A047',
    },
  },
  error: {
    icon: '❌',
    style: {
      background: '#ffff',
      color: '#E30909',
      border: '1px solid #E30909',
    },
  },
  loading: {
    style: {
      background: '#ffff',
      color: '#35557C',
      border: '1px solid #35557C',
    },
  },
};

// دالة نجاح
export const showSuccess = (message, options = {}) => {
  toast.success(message, { ...defaultOptions, ...defaultOptions.success, ...options });
};

// دالة خطأ
export const showError = (message, options = {}) => {
  toast.error(message, { ...defaultOptions, ...defaultOptions.error, ...options });
};

// دالة تحذير / معلومات
export const showInfo = (message, options = {}) => {
  toast(message, {
    ...defaultOptions,
    icon: 'ℹ️',
    style: { ...defaultOptions.style, background: '#3b82f6' },
    ...options,
  });
};

// دالة تحميل (للعمليات غير المتزامنة)
export const showLoading = (message, options = {}) => {
  return toast.loading(message, { ...defaultOptions, ...defaultOptions.loading, ...options });
};

// دالة promise (للعمليات غير المتزامنة مع رسائل نجاح/خطأ تلقائية)
export const showPromise = (promise, messages, options = {}) => {
  const { loading = 'جاري التنفيذ...', success = 'تم بنجاح!', error = 'حدث خطأ!' } = messages;
  return toast.promise(promise, {
    loading,
    success,
    error,
  }, { ...defaultOptions, ...options });
};