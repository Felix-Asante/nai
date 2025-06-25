export const apiEndpoints = {
  newsletter: {
    subscribe: (formId: string) =>
      `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
  },
};
