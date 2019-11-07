/** @jsx jsx */
import { jsx } from "theme-ui"

const SmallClap = ({ fill, numClaps, ...props }) => {
  return (
    <div sx={{ display: `flex`, alignItems: `center`, color: fill }}>
      <svg
        width="23"
        height="24"
        viewBox="0 0 23 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M2.44299 13.2318C1.85053 12.4825 1.87874 11.3724 2.58406 10.6785C2.80976 10.4565 3.12009 10.29 3.43043 10.2067C3.31758 9.95696 3.26116 9.67943 3.26116 9.4019C3.26116 8.87459 3.45865 8.4028 3.82541 8.04201C4.53072 7.34818 5.6028 7.29268 6.36454 7.84774C6.44918 7.62571 6.56203 7.40369 6.7313 7.20942C7.09807 6.82088 7.60589 6.5711 8.14193 6.5711C8.64976 6.54334 9.15759 6.73762 9.52435 7.09841C9.58077 7.01515 9.6372 6.90413 9.72184 6.84863C10.0886 6.46009 10.5964 6.21031 11.1325 6.21031C11.6967 6.18256 12.2045 6.40458 12.5713 6.76537L15.3926 9.51292C15.7029 8.34729 16.8314 7.54245 18.0728 7.68122C18.4113 7.70897 18.7216 7.87549 18.9474 8.09752C19.4552 7.54245 20.2451 7.20942 21.0633 7.29268C21.825 7.37594 22.4175 8.01426 22.4175 8.79134L22.3893 12.8155C22.3893 13.8701 22.5303 14.9525 22.7843 15.8961V15.9239C23.3485 17.8666 22.7843 19.9481 21.3454 21.3635C19.8502 22.8344 17.8471 23.6392 15.7593 23.6392C15.5901 23.6392 15.3926 23.6392 15.2233 23.6115C14.4333 23.8612 13.587 24 12.7688 24C10.7375 24 8.70619 23.2507 7.18271 21.7243L1.73768 16.3402C1.37091 15.9794 1.17343 15.4798 1.17343 14.9803C1.17343 14.453 1.37091 13.9812 1.73768 13.6204C1.93517 13.4538 2.18908 13.3151 2.44299 13.2318ZM11.7531 7.57021C11.5839 7.40369 11.3582 7.34818 11.1607 7.34818C10.935 7.34818 10.7375 7.45919 10.5964 7.59796C10.5118 7.70897 10.4554 7.84774 10.4554 7.9865L15.1104 12.6768L15.2515 10.9838L11.7531 7.57021ZM20.5273 20.5864C21.684 19.4485 22.1072 17.8111 21.684 16.2847C21.3736 15.1745 21.2326 14.0089 21.2326 12.8433L21.2608 8.81909C21.2608 8.65257 21.1197 8.48606 20.9504 8.48606C20.2169 8.4028 19.568 8.9301 19.4834 9.62393L19.427 10.29L19.3988 13.2041C19.3988 14.2587 19.5398 15.3133 19.7655 16.2569C19.7655 16.2847 19.7937 16.2847 19.7937 16.3124C20.358 18.2551 19.7937 20.3366 18.3549 21.752C18.2138 21.8908 18.0445 22.0295 17.9035 22.1683C18.8909 21.8353 19.7937 21.308 20.5273 20.5864ZM2.55584 15.5631L8.00087 20.9472C10.6246 23.5282 14.913 23.5282 17.5367 20.9472C18.6652 19.837 19.1166 18.1996 18.6934 16.6732V16.6454C18.3831 15.5076 18.242 14.3697 18.242 13.2041V9.17988C18.242 9.01336 18.101 8.84684 17.9317 8.84684C17.1982 8.76359 16.5493 9.29089 16.4646 9.98472L16.2672 12.7878C16.2107 13.2041 15.9286 13.5649 15.5336 13.7036C15.1104 13.8424 14.6873 13.7314 14.3769 13.4538L8.79082 7.95875C8.62155 7.79223 8.48048 7.70897 8.19836 7.73672C7.97266 7.73672 7.77517 7.84774 7.63411 7.9865C7.38019 8.26403 7.40841 8.81909 7.71874 9.12437L11.866 13.2318C12.0917 13.4538 12.0917 13.8146 11.866 14.0367C11.7531 14.1477 11.6121 14.2032 11.4428 14.2032C11.3017 14.2032 11.1325 14.1477 11.0196 14.0367L6.84415 9.92921L5.74386 8.84684C5.43352 8.54156 4.9257 8.54156 4.61536 8.84684C4.4743 8.98561 4.38966 9.17988 4.38966 9.4019C4.38966 9.62393 4.4743 9.8182 4.61536 9.95696L9.91933 15.1468C10.145 15.3688 10.145 15.7296 9.91933 15.9516C9.80648 16.0626 9.66541 16.1181 9.49614 16.1181C9.32686 16.1181 9.1858 16.0626 9.07295 15.9516L6.11063 13.0376L4.53072 11.4834C4.22039 11.1781 3.71256 11.1781 3.40222 11.4834C3.09188 11.7887 3.09188 12.2882 3.40222 12.5935L4.4743 13.6481L5.26425 14.3974L7.97266 17.0617C8.19836 17.2838 8.19836 17.6446 7.97266 17.8666C7.85981 17.9776 7.71874 18.0331 7.54947 18.0331C7.38019 18.0331 7.23913 17.9776 7.12628 17.8666L3.65613 14.453C3.3458 14.1477 2.83797 14.1477 2.52763 14.453C2.38657 14.5917 2.30193 14.786 2.30193 15.008C2.30193 15.23 2.38657 15.4243 2.55584 15.5631ZM6.64667 3.76804L5.20782 0.742962C5.06676 0.465431 4.72821 0.326666 4.44608 0.465431C4.16396 0.604196 4.0229 0.937233 4.16396 1.21476L5.57459 4.2676C5.68744 4.48962 5.88493 4.60063 6.11063 4.60063C6.19527 4.60063 6.2799 4.57288 6.36454 4.54513C6.64667 4.40636 6.75952 4.04557 6.64667 3.76804ZM10.4554 0.715185C10.54 0.409902 10.3425 0.104619 10.0322 0.0213596C9.72184 -0.0618995 9.4115 0.104619 9.32686 0.409902L8.45227 3.62925C8.36763 3.93454 8.56512 4.23982 8.87546 4.32308C8.93189 4.32308 8.98831 4.35083 9.01652 4.35083C9.27044 4.35083 9.49614 4.18431 9.58078 3.93454L10.4554 0.715185ZM0.327049 4.7394L3.40222 6.1548C3.48686 6.18256 3.5715 6.21031 3.65613 6.21031C3.88183 6.21031 4.07932 6.0993 4.19217 5.87727C4.33324 5.59974 4.19217 5.23895 3.91005 5.12794L0.834876 3.71254C0.552751 3.57377 0.185986 3.71254 0.0731355 3.99007C-0.09614 4.2676 0.0449233 4.60063 0.327049 4.7394Z"
          sx={{ fill: fill }}
        />
      </svg>
      <span sx={{ transform: `translateX(5px) translateY(3px)` }}>
        {numClaps}
      </span>
    </div>
  )
}

export default SmallClap