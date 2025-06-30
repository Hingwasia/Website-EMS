// Dynamic EmailJS loader - only loads when actually needed
let emailJSPromise: Promise<typeof import('@emailjs/browser')> | null = null;

export const loadEmailJS = async () => {
  if (!emailJSPromise) {
    emailJSPromise = import('@emailjs/browser');
  }
  return emailJSPromise;
};

// Initialize EmailJS with credentials
export const initializeEmailJS = async () => {
  const emailjs = await loadEmailJS();
  emailjs.init('Db4TAst00TIb7TuLO');
  return emailjs;
};

// Send email using dynamic import
export const sendEmail = async (templateParams: Record<string, any>) => {
  const emailjs = await initializeEmailJS();
  return emailjs.send(
    'service_v46y05j',
    'template_l94ktds',
    templateParams
  );
}; 