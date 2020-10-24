const DnaIcon = ({ color }) => (
    <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.8" cx="24" cy="24" r="23.5" stroke={color} />
        <path
            d="M14.4155 17.9345L10.7203 15.8009C10.5289 15.69 10.2844 15.756 10.1738 15.9474C10.0635 16.1388 10.1289 16.3834 10.3203 16.4939L14.0155 18.6275C14.0783 18.6638 14.1473 18.681 14.2151 18.681C14.3533 18.681 14.4877 18.6095 14.5619 18.481C14.6723 18.2896 14.6069 18.0451 14.4155 17.9345Z"
            fill={color}
        />
        <path
            d="M8.4 24.3391H12.6666C12.8875 24.3391 13.0666 24.1602 13.0666 23.9391C13.0666 23.718 12.8875 23.5391 12.6666 23.5391H8.4C8.1791 23.5391 8 23.718 8 23.9391C8 24.1602 8.1791 24.3391 8.4 24.3391Z"
            fill={color}
        />
        <path
            d="M13.9547 29.2678L10.2596 31.401C10.0684 31.5116 10.0028 31.7561 10.1131 31.9475C10.1874 32.0756 10.3217 32.1475 10.46 32.1475C10.5278 32.1475 10.5965 32.1303 10.6596 32.094L14.3547 29.9608C14.546 29.8502 14.6116 29.6057 14.5012 29.4143C14.3903 29.2225 14.1465 29.1569 13.9547 29.2678Z"
            fill={color}
        />
        <path
            d="M33.5845 30.0652L37.2796 32.1988C37.3425 32.2351 37.4114 32.2523 37.4792 32.2523C37.6175 32.2523 37.7519 32.1808 37.8261 32.0523C37.9364 31.8609 37.871 31.6164 37.6796 31.5058L33.9845 29.3722C33.7929 29.2613 33.5486 29.3273 33.438 29.5187C33.3277 29.7101 33.3931 29.9547 33.5845 30.0652Z"
            fill={color}
        />
        <path
            d="M40.0001 24.0602C40.0001 23.8391 39.821 23.6602 39.6001 23.6602H35.3335C35.1126 23.6602 34.9335 23.8391 34.9335 24.0602C34.9335 24.2812 35.1126 24.4602 35.3335 24.4602H39.6001C39.821 24.4602 40.0001 24.2812 40.0001 24.0602Z"
            fill={color}
        />
        <path
            d="M33.8458 18.7858C33.9135 18.7858 33.9823 18.7687 34.0454 18.7323L37.7405 16.5991C37.9317 16.4886 37.9973 16.244 37.887 16.0526C37.7764 15.8616 37.5323 15.7956 37.3405 15.9062L33.6454 18.0394C33.4542 18.1499 33.3885 18.3944 33.4989 18.5858C33.5731 18.7144 33.7075 18.7858 33.8458 18.7858Z"
            fill={color}
        />
        <path
            d="M28.7666 8.4C28.7666 8.17891 28.5875 8 28.3666 8C28.1457 8 27.9666 8.17891 27.9666 8.4C27.9666 9.13606 27.8835 9.79602 27.7376 10.4H20.2624C20.1165 9.79602 20.0334 9.13606 20.0334 8.4C20.0334 8.17891 19.8543 8 19.6334 8C19.4125 8 19.2334 8.17891 19.2334 8.4C19.2334 12.2743 21.2973 14.3119 23.4004 16.2C21.2973 18.0881 19.2334 20.1257 19.2334 24C19.2334 27.8743 21.2973 29.9119 23.4004 31.8C21.2973 33.6881 19.2334 35.7257 19.2334 39.6C19.2334 39.8211 19.4125 40 19.6334 40C19.8543 40 20.0334 39.8211 20.0334 39.6C20.0334 38.8639 20.1165 38.204 20.2624 37.6H27.7376C27.8835 38.204 27.9666 38.8639 27.9666 39.6C27.9666 39.8211 28.1457 40 28.3666 40C28.5875 40 28.7666 39.8211 28.7666 39.6C28.7666 35.7257 26.7027 33.6881 24.5996 31.8C26.7027 29.9119 28.7666 27.8743 28.7666 24C28.7666 20.1257 26.7027 18.0881 24.5996 16.2C26.7027 14.3119 28.7666 12.2743 28.7666 8.4ZM27.9666 24C27.9666 24.7498 27.8798 25.4201 27.7286 26.0332H20.2714C20.1202 25.4201 20.0334 24.7498 20.0334 24C20.0334 23.2502 20.1202 22.5799 20.2714 21.9668H27.7286C27.8798 22.5799 27.9666 23.2502 27.9666 24ZM27.4934 36.8H20.5066C21.1948 34.9261 22.5507 33.6355 24 32.337C25.4493 33.6355 26.8052 34.9261 27.4934 36.8ZM24 31.263C22.5592 29.9721 21.2104 28.6893 20.5184 26.8332H27.4816C26.7896 28.6893 25.4408 29.9721 24 31.263ZM27.4816 21.1668H20.5184C21.2104 19.3107 22.5592 18.0279 24 16.737C25.4408 18.0279 26.7896 19.3107 27.4816 21.1668ZM24 15.663C22.5507 14.3645 21.1948 13.0739 20.5066 11.2H27.4934C26.8052 13.0739 25.4493 14.3645 24 15.663Z"
            fill={color}
        />
    </svg>
);

export default DnaIcon;
