import Script from "next/script";

export function ThemeScript() {
  return (
    <Script
      id="theme-script"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              const userTheme = localStorage.getItem('theme');
              const theme = userTheme === 'system' ? systemTheme : userTheme || systemTheme;
              
              document.documentElement.classList.add(theme);
            } catch (e) {
              console.error('Error al aplicar el tema:', e);
            }
          })();
        `,
      }}
    />
  );
}
