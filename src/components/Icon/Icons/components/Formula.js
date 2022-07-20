/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Formula = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M10.8485 4.636C10.9933 4.23983 11.1638 3.97859 11.3367 3.82212 11.4934 3.68028 11.6764 3.59999 11.9423 3.59999H14.1667C14.6269 3.59999 15 3.24182 15 2.8 15 2.35817 14.6269 2 14.1667 2H11.9423C11.246 2 10.6556 2.23971 10.1935 2.65787 9.75109 3.05824 9.46075 3.5896 9.26369 4.13991L9.25464 4.16517 7.97024 8.72028H5.4992C5.03898 8.72028 4.6659 9.07846 4.6659 9.52028 4.6659 9.96211 5.03898 10.3203 5.4992 10.3203H7.51909L6.10475 15.3362C5.92773 15.964 5.33437 16.3999 4.65692 16.3999H2.8333C2.37308 16.3999 2 16.7581 2 17.1999 2 17.6417 2.37308 17.9999 2.8333 17.9999H4.65692C6.08709 17.9999 7.33974 17.0796 7.71344 15.7543L9.24566 10.3203H11.8323C12.2925 10.3203 12.6656 9.96211 12.6656 9.52028 12.6656 9.07846 12.2925 8.72028 11.8323 8.72028H9.69681L10.8485 4.636zM17.675 12.1124C18.0244 12.3999 18.0649 12.9049 17.7654 13.2404L16.2301 14.96 17.7652 16.6794C18.0647 17.0148 18.0242 17.5199 17.6748 17.8074 17.3254 18.0949 16.7993 18.0561 16.4998 17.7206L15.1326 16.1892 13.7656 17.7204C13.466 18.0558 12.94 18.0947 12.5906 17.8071 12.2411 17.5196 12.2007 17.0146 12.5002 16.6791L14.0351 14.96 12.5 13.2406C12.2005 12.9052 12.241 12.4002 12.5904 12.1126 12.9398 11.8251 13.4659 11.8639 13.7654 12.1994L15.1326 13.7307 16.5 12.1991C16.7995 11.8637 17.3256 11.8248 17.675 12.1124z"
      fill="currentColor" />
  </svg>
);
Formula.displayName = 'Formula';
Formula.propTypes = {
  size: PropTypes.string
}
export default Formula;
/* tslint:enable */
/* eslint-enable */
