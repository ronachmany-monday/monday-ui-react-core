/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const MondayDoc = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M15.6533 16.5539C15.6533 16.8121 15.5508 17.0596 15.3682 17.2422C15.1857 17.4247 14.9381 17.5272 14.68 17.5272H4.97333C4.71519 17.5272 4.46762 17.4247 4.28508 17.2422C4.10255 17.0596 4 16.8121 4 16.5539V3.90058C4 3.64244 4.10255 3.39486 4.28508 3.21233C4.46762 3.02979 4.71519 2.92725 4.97333 2.92725H10.8704C11.1283 2.9273 11.3757 3.02976 11.5582 3.21211L15.3685 7.02238C15.5508 7.20485 15.6533 7.45224 15.6533 7.71021V16.5539Z"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.0866 12.8854C6.77616 12.8851 6.49033 12.7208 6.34008 12.4563 6.18984 12.1918 6.19884 11.8687 6.3636 11.6126L7.90088 9.22297C8.05878 8.96277 8.34925 8.80648 8.65953 8.81477 8.96981 8.82305 9.25104 8.9946 9.39406 9.26283 9.53708 9.53105 9.51937 9.85372 9.34779 10.1056L7.81142 12.4952C7.65515 12.7383 7.38117 12.8858 7.0866 12.8854V12.8854zM9.52758 12.8854C9.21765 12.8851 8.93229 12.7212 8.78229 12.4573 8.63229 12.1934 8.64128 11.8712 8.80577 11.6156L10.3401 9.23167C10.4955 8.96768 10.787 8.80765 11.0996 8.81468 11.4122 8.8217 11.6958 8.99466 11.8385 9.26535 11.9812 9.53605 11.9602 9.86103 11.7837 10.1122L10.2494 12.4961C10.0937 12.7381 9.82103 12.8852 9.52758 12.8854V12.8854zM12.2717 12.8852C12.7588 12.8852 13.1537 12.4903 13.1537 12.0031 13.1537 11.516 12.7588 11.1211 12.2717 11.1211 11.7845 11.1211 11.3896 11.516 11.3896 12.0031 11.3896 12.4903 11.7845 12.8852 12.2717 12.8852z"
      fill="currentColor" />
  </svg>
);
MondayDoc.displayName = 'MondayDoc';
MondayDoc.propTypes = {
  size: PropTypes.string
}
export default MondayDoc;
/* tslint:enable */
/* eslint-enable */
