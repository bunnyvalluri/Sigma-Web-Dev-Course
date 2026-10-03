/**
 * ==========================================================================
 * Sigma Web Development Course - Video 105
 * Topic: Introduction to React.js
 * File: reportWebVitals.js
 * 
 * Description:
 *   Why React: Understanding Single Page Applications, Virtual DOM, JSX, and component-based architecture.
 * ==========================================================================
 */
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
