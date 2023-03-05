import React from 'react'

const WeatherIcons = ({ id, size }) => {
    switch (id) {
        case 'ясно':
            return (
                <svg width={size} height="100%" viewBox="0 0 119 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M59.5229 88.0144C75.2638 88.0144 88.0243 75.2545 88.0243 59.5144C88.0243 43.7742 75.2638 31.0143 59.5229 31.0143C43.782 31.0143 31.0215 43.7742 31.0215 59.5144C31.0215 75.2545 43.782 88.0144 59.5229 88.0144Z" fill="url(#paint0_linear_2_438)" />
                    <path d="M86.3084 5.95127L79.6106 22.1222C77.4274 27.389 69.5268 24.1172 71.71 18.8504L78.4078 2.67947C80.591 -2.58734 88.4916 0.684466 86.3084 5.95127ZM47.2843 100.155L40.5865 116.326C38.4033 121.593 30.5027 118.321 32.6859 113.054L39.3837 96.8835C41.5669 91.6167 49.4675 94.8885 47.2843 100.155ZM116.326 40.5959L100.154 47.2934C94.8873 49.4765 91.6154 41.5763 96.8824 39.3932L113.054 32.6957C118.321 30.5126 121.593 38.4128 116.326 40.5959ZM22.1176 79.6182L5.94586 86.3157C0.6788 88.4988 -2.59316 80.5986 2.6739 78.4155L18.8456 71.718C24.1127 69.5349 27.3846 77.4351 22.1176 79.6182ZM113.054 86.3214L96.8824 79.6239C91.6154 77.4408 94.8873 69.5406 100.154 71.7237L116.326 78.4212C121.593 80.6043 118.321 88.5045 113.054 86.3214ZM18.8456 47.2991L2.6739 40.6016C-2.59316 38.4185 0.6788 30.5183 5.94586 32.7014L22.1176 39.3989C27.3846 41.582 24.1127 49.4822 18.8456 47.2991ZM40.5808 2.67377L47.2786 18.8447C49.4618 24.1115 41.5612 27.3833 39.378 22.1165L32.6802 5.94557C30.497 0.678766 38.3976 -2.59304 40.5808 2.67377ZM79.6049 96.8778L86.3027 113.049C88.4859 118.316 80.5853 121.587 78.4021 116.321L71.7043 100.15C69.5211 94.8828 77.4217 91.611 79.6049 96.8778Z" fill="#FFB300" />
                    <defs>
                        <linearGradient id="paint0_linear_2_438" x1="59.5229" y1="31.0143" x2="59.5229" y2="87.2546" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFC227" />
                            <stop offset="1" stop-color="#FFB300" />
                        </linearGradient>
                    </defs>
                </svg>
            )
            break;
        case "пасмурно" || "переменная облачность" || "небольшая облачность":
            return (
                <svg width={size}height="100%"viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.32" d="M38 28C41.314 28 44 25.314 44 22C44 18.686 41.314 16 38 16H37.938C37.978 15.672 38 15.338 38 15C38 10.582 34.418 7 30 7C26.5 7 23.524 9.248 22.44 12.378C21.67 12.132 20.852 12 20 12C15.582 12 12 15.582 12 20C12 24.418 15.582 28 20 28C20.69 28 21.36 27.912 22 27.748V28H38Z" fill="#73A5E6" />
                    <path d="M12 38C7.582 38 4 34.418 4 30C4 25.582 7.582 22 12 22C12.834 22 13.636 22.128 14.392 22.364C15.518 18.68 18.946 16 23 16C27.97 16 32 20.03 32 25C32 25.47 31.964 25.93 31.894 26.38C32.55 26.134 33.258 26 34 26C37.314 26 40 28.686 40 32C40 35.314 37.314 38 34 38H12Z" fill="url(#paint0_linear_2_550)" />
                    <path d="M14 25C14 29.97 18.03 34 23 34C27.502 34 31.23 30.696 31.894 26.38C32.55 26.134 33.258 26 34 26C37.314 26 40 28.686 40 32C40 35.314 37.314 38 34 38H12C7.582 38 4 34.418 4 30C4 25.582 7.582 22 12 22C12.834 22 13.636 22.128 14.392 22.364C14.136 23.198 14 24.082 14 25Z" fill="url(#paint1_radial_2_550)" />
                    <defs>
                        <linearGradient id="paint0_linear_2_550" x1="22" y1="16" x2="22" y2="38" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#9FC7FF" />
                            <stop offset="1" stop-color="#9BC1F5" />
                        </linearGradient>
                        <radialGradient id="paint1_radial_2_550" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.9439 -22.6966) rotate(-90) scale(20.9574 6.69705)">
                            <stop stop-color="#486DA8" stop-opacity="0.4" />
                            <stop offset="1" stop-color="#486DA8" stop-opacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            )
            break
        case "Облачно с прояснениями":
            return (
                <svg width={size}height="100%"viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 24C36.4183 24 40 20.4183 40 16C40 11.5817 36.4183 8 32 8C27.5817 8 24 11.5817 24 16C24 20.4183 27.5817 24 32 24Z" fill="url(#paint0_linear_2_530)" />
                    <path d="M30.96 1.45999L31.48 4.41399C31.828 6.38399 28.872 6.90399 28.526 4.93399L28.006 1.97999C27.658 0.00998566 30.614 -0.510014 30.96 1.45999ZM41.546 4.98199L39.826 7.43999C38.678 9.07799 36.222 7.35799 37.368 5.71999L39.088 3.26199C40.236 1.62399 42.692 3.34399 41.546 4.98199ZM20.984 6.45399L23.442 8.17399C25.08 9.32199 23.36 11.778 21.722 10.632L19.264 8.91199C17.626 7.76399 19.346 5.30799 20.984 6.45399ZM42.282 21.366L44.74 23.086C46.378 24.234 44.658 26.69 43.02 25.544L40.562 23.824C38.924 22.676 40.644 20.22 42.282 21.366ZM46.542 14.958L43.588 15.478C41.618 15.826 41.098 12.87 43.068 12.524L46.022 12.004C47.992 11.656 48.512 14.612 46.542 14.958Z" fill="#FFB300" />
                    <path d="M14.218 38.926L12.118 43.924C11.798 44.688 12.156 45.568 12.92 45.888C13.684 46.208 14.564 45.85 14.884 45.086L16.984 40.088C17.304 39.324 16.946 38.444 16.182 38.124C15.418 37.804 14.538 38.162 14.218 38.926ZM24.218 36.926L22.118 41.924C21.798 42.688 22.156 43.568 22.92 43.888C23.684 44.208 24.564 43.85 24.884 43.086L26.984 38.088C27.304 37.324 26.946 36.444 26.182 36.124C25.418 35.804 24.538 36.162 24.218 36.926Z" fill="#66AFEB" />
                    <path d="M12 34C7.582 34 4 30.418 4 26C4 21.582 7.582 18 12 18C12.834 18 13.636 18.128 14.392 18.364C15.518 14.68 18.946 12 23 12C27.97 12 32 16.03 32 21C32 21.47 31.964 21.93 31.894 22.38C32.55 22.134 33.258 22 34 22C37.314 22 40 24.686 40 28C40 31.314 37.314 34 34 34H12Z" fill="url(#paint1_linear_2_530)" />
                    <path d="M14 21C14 25.97 18.03 30 23 30C27.502 30 31.23 26.696 31.894 22.38C32.55 22.134 33.258 22 34 22C37.314 22 40 24.686 40 28C40 31.314 37.314 34 34 34H12C7.582 34 4 30.418 4 26C4 21.582 7.582 18 12 18C12.834 18 13.636 18.128 14.392 18.364C14.136 19.198 14 20.082 14 21Z" fill="url(#paint2_radial_2_530)" />
                    <defs>
                        <linearGradient id="paint0_linear_2_530" x1="40" y1="8" x2="28.7832" y2="19.0723" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFB301" />
                            <stop offset="1" stop-color="#FFC533" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_2_530" x1="22" y1="12" x2="22" y2="34" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#9FC7FF" />
                            <stop offset="1" stop-color="#9BC1F5" />
                        </linearGradient>
                        <radialGradient id="paint2_radial_2_530" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.0679 -22.6966) rotate(-90) scale(20.9574 6.69705)">
                            <stop stop-color="#486DA8" stop-opacity="0.4" />
                            <stop offset="1" stop-color="#486DA8" stop-opacity="0" />
                        </radialGradient>
                    </defs>
                </svg>

            )
            break;
        case "небольшой дождь":
            return (
                <svg width={size}height="100%"viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.218 32.926L14.118 37.924C13.798 38.688 14.156 39.568 14.92 39.888C15.684 40.208 16.564 39.85 16.884 39.086L18.984 34.088C19.304 33.324 18.946 32.444 18.182 32.124C17.418 31.804 16.538 32.162 16.218 32.926ZM26.218 30.926L24.118 35.924C23.798 36.688 24.156 37.568 24.92 37.888C25.684 38.208 26.564 37.85 26.884 37.086L28.984 32.088C29.304 31.324 28.946 30.444 28.182 30.124C27.418 29.804 26.538 30.162 26.218 30.926Z" fill="#66AFEB" />
                    <path d="M14 28C9.582 28 6 24.418 6 20C6 15.582 9.582 12 14 12C14.834 12 15.636 12.128 16.392 12.364C17.518 8.68 20.946 6 25 6C29.97 6 34 10.03 34 15C34 15.47 33.964 15.93 33.894 16.38C34.55 16.134 35.258 16 36 16C39.314 16 42 18.686 42 22C42 25.314 39.314 28 36 28H14Z" fill="url(#paint0_linear_2_537)" />
                    <path d="M16 15C16 19.97 20.03 24 25 24C29.502 24 33.23 20.696 33.894 16.38C34.55 16.134 35.258 16 36 16C39.314 16 42 18.686 42 22C42 25.314 39.314 28 36 28H14C9.582 28 6 24.418 6 20C6 15.582 9.582 12 14 12C14.834 12 15.636 12.128 16.392 12.364C16.136 13.198 16 14.082 16 15Z" fill="url(#paint1_radial_2_537)" />
                    <defs>
                        <linearGradient id="paint0_linear_2_537" x1="24" y1="6" x2="24" y2="28" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#9FC7FF" />
                            <stop offset="1" stop-color="#9BC1F5" />
                        </linearGradient>
                        <radialGradient id="paint1_radial_2_537" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.7539 -24.6966) rotate(-90) scale(20.9574 6.69705)">
                            <stop stop-color="#486DA8" stop-opacity="0.4" />
                            <stop offset="1" stop-color="#486DA8" stop-opacity="0" />
                        </radialGradient>
                    </defs>
                </svg>

            )
            break;
        case "дождь":
            return (
                <svg width={size}height="100%"viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.218 32.926L12.118 37.924C11.798 38.688 12.156 39.568 12.92 39.888C13.684 40.208 14.564 39.85 14.884 39.086L16.984 34.088C17.304 33.324 16.946 32.444 16.182 32.124C15.418 31.804 14.538 32.162 14.218 32.926ZM30.218 32.926L28.118 37.924C27.798 38.688 28.156 39.568 28.92 39.888C29.684 40.208 30.564 39.85 30.884 39.086L32.984 34.088C33.304 33.324 32.946 32.444 32.182 32.124C31.418 31.804 30.538 32.162 30.218 32.926ZM22.218 30.926L20.118 35.924C19.798 36.688 20.156 37.568 20.92 37.888C21.684 38.208 22.564 37.85 22.884 37.086L24.984 32.088C25.304 31.324 24.946 30.444 24.182 30.124C23.418 29.804 22.538 30.162 22.218 30.926Z" fill="#66AFEB" />
                    <path d="M14 28C9.582 28 6 24.418 6 20C6 15.582 9.582 12 14 12C14.834 12 15.636 12.128 16.392 12.364C17.518 8.68 20.946 6 25 6C29.97 6 34 10.03 34 15C34 15.47 33.964 15.93 33.894 16.38C34.55 16.134 35.258 16 36 16C39.314 16 42 18.686 42 22C42 25.314 39.314 28 36 28H14Z" fill="url(#paint0_linear_2_525)" />
                    <path d="M16 15C16 19.97 20.03 24 25 24C29.502 24 33.23 20.696 33.894 16.38C34.55 16.134 35.258 16 36 16C39.314 16 42 18.686 42 22C42 25.314 39.314 28 36 28H14C9.582 28 6 24.418 6 20C6 15.582 9.582 12 14 12C14.834 12 15.636 12.128 16.392 12.364C16.136 13.198 16 14.082 16 15Z" fill="url(#paint1_radial_2_525)" />
                    <defs>
                        <linearGradient id="paint0_linear_2_525" x1="24" y1="6" x2="24" y2="28" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#9FC7FF" />
                            <stop offset="1" stop-color="#9BC1F5" />
                        </linearGradient>
                        <radialGradient id="paint1_radial_2_525" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.7539 -24.6966) rotate(-90) scale(20.9574 6.69705)">
                            <stop stop-color="#486DA8" stop-opacity="0.4" />
                            <stop offset="1" stop-color="#486DA8" stop-opacity="0" />
                        </radialGradient>
                    </defs>
                </svg>

            )
            break
        default:
            return null
            break;
    }
}

export default WeatherIcons