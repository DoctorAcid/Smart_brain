import React from 'react';
import { motion } from 'framer-motion';

const Navigation = ({onRouteChange, route}) => {
  return (
    <div 
    style={{
      position: 'absolute',
      width: '100vw',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      top: "0",
      backgroundColor: '#24272c',
      borderBottom: '1px solid #454754'
      // border: '2px solid red'
      }}
    >
      <div style={{height: '48px', padding: '32px', display: 'flex', gap: '16px', alignItems: 'center'}}>
        <div>
          <svg width="64" height="48" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_12_51" fill="white">
            <path fillRule="evenodd" clipRule="evenodd" d="M22.823 21.1486C20.642 22.3966 20.642 25.5166 22.823 26.7647L59.0148 47.4738C61.1958 48.7219 63.9221 47.1618 63.9221 44.6658L63.9221 38.9693C63.8461 38.2964 63.4584 37.717 62.9054 37.376L62.7808 37.3047C62.7308 37.2782 62.6795 37.2536 62.6272 37.2309L62.6272 37.2168L44.3608 26.7647C42.1798 25.5166 42.1798 22.3966 44.3608 21.1486L62.6272 10.6965L62.6272 10.6883C62.6503 10.6783 62.6732 10.6679 62.6959 10.6571L62.9853 10.4916C63.4955 10.1454 63.8498 9.58994 63.9221 8.94999L63.9221 3.24745C63.9221 0.751421 61.1958 -0.808596 59.0148 0.439417L22.823 21.1486Z"/>
            </mask>
            <path fillRule="evenodd" clipRule="evenodd" d="M22.823 21.1486C20.642 22.3966 20.642 25.5166 22.823 26.7647L59.0148 47.4738C61.1958 48.7219 63.9221 47.1618 63.9221 44.6658L63.9221 38.9693C63.8461 38.2964 63.4584 37.717 62.9054 37.376L62.7808 37.3047C62.7308 37.2782 62.6795 37.2536 62.6272 37.2309L62.6272 37.2168L44.3608 26.7647C42.1798 25.5166 42.1798 22.3966 44.3608 21.1486L62.6272 10.6965L62.6272 10.6883C62.6503 10.6783 62.6732 10.6679 62.6959 10.6571L62.9853 10.4916C63.4955 10.1454 63.8498 9.58994 63.9221 8.94999L63.9221 3.24745C63.9221 0.751421 61.1958 -0.808596 59.0148 0.439417L22.823 21.1486Z" fill="url(#paint0_linear_12_51)"/>
            <path d="M22.823 26.7647L23.3197 25.8967L23.3197 25.8967L22.823 26.7647ZM22.823 21.1486L23.3197 22.0166L23.3197 22.0166L22.823 21.1486ZM59.0148 47.4738L59.5114 46.6059L59.5114 46.6059L59.0148 47.4738ZM63.9221 44.6658L62.9221 44.6658L63.9221 44.6658ZM63.9221 38.9693L64.9221 38.9693L64.9221 38.9129L64.9158 38.8569L63.9221 38.9693ZM62.9054 37.376L63.4303 36.5249L63.4164 36.5162L63.4021 36.5081L62.9054 37.376ZM62.7808 37.3047L63.2775 36.4368L63.2632 36.4286L63.2487 36.4209L62.7808 37.3047ZM62.6272 37.2309L61.6272 37.2309L61.6272 37.8876L62.2298 38.1486L62.6272 37.2309ZM62.6272 37.2168L63.6272 37.2168L63.6272 36.6369L63.1238 36.3489L62.6272 37.2168ZM44.3608 26.7647L43.8642 27.6326L43.8642 27.6326L44.3608 26.7647ZM44.3608 21.1486L43.8642 20.2807L43.8642 20.2807L44.3608 21.1486ZM62.6272 10.6965L63.1238 11.5644L63.6272 11.2764L63.6272 10.6965L62.6272 10.6965ZM62.6272 10.6883L62.2298 9.77065L61.6272 10.0316L61.6272 10.6883L62.6272 10.6883ZM62.6959 10.6571L63.1248 11.5605L63.1594 11.5441L63.1926 11.5251L62.6959 10.6571ZM62.9853 10.4916L63.4819 11.3595L63.5151 11.3405L63.5467 11.3191L62.9853 10.4916ZM63.9221 8.94999L64.9158 9.06235L64.9221 9.00635L64.9221 8.94999L63.9221 8.94999ZM59.0148 0.439417L58.5182 -0.428535L59.0148 0.439417ZM23.3197 25.8967C21.8098 25.0327 21.8098 22.8805 23.3197 22.0166L22.3264 20.2807C19.4742 21.9127 19.4742 26.0006 22.3264 27.6326L23.3197 25.8967ZM59.5114 46.6059L23.3197 25.8967L22.3264 27.6326L58.5181 48.3418L59.5114 46.6059ZM62.9221 44.6658C62.9221 46.3784 61.0392 47.4801 59.5114 46.6059L58.5181 48.3418C61.3525 49.9636 64.9221 47.9453 64.9221 44.6658L62.9221 44.6658ZM62.9221 38.9693L62.9221 44.6658L64.9221 44.6658L64.9221 38.9693L62.9221 38.9693ZM62.3805 38.2272C62.6828 38.4136 62.8883 38.7263 62.9285 39.0816L64.9158 38.8569C64.8038 37.8666 64.234 37.0204 63.4303 36.5249L62.3805 38.2272ZM62.2842 38.1727L62.4088 38.244L63.4021 36.5081L63.2775 36.4368L62.2842 38.1727ZM62.2298 38.1486C62.2581 38.1608 62.2859 38.1742 62.313 38.1885L63.2487 36.4209C63.1757 36.3823 63.1009 36.3463 63.0246 36.3133L62.2298 38.1486ZM61.6272 37.2168L61.6272 37.2309L63.6272 37.2309L63.6272 37.2168L61.6272 37.2168ZM43.8642 27.6326L62.1305 38.0848L63.1238 36.3489L44.8575 25.8967L43.8642 27.6326ZM43.8642 20.2807C41.012 21.9127 41.012 26.0006 43.8642 27.6326L44.8575 25.8967C43.3476 25.0327 43.3476 22.8805 44.8575 22.0166L43.8642 20.2807ZM62.1305 9.82851L43.8642 20.2807L44.8575 22.0166L63.1238 11.5644L62.1305 9.82851ZM63.6272 10.6965L63.6272 10.6883L61.6272 10.6883L61.6272 10.6965L63.6272 10.6965ZM63.0245 11.606C63.0584 11.5913 63.0918 11.5762 63.1248 11.5605L62.267 9.75378C62.2547 9.75965 62.2423 9.76527 62.2298 9.77065L63.0245 11.606ZM62.4886 9.62361L62.1993 9.78918L63.1926 11.5251L63.4819 11.3595L62.4886 9.62361ZM63.5467 11.3191C64.2884 10.8159 64.8093 10.0043 64.9158 9.06235L62.9285 8.83762C62.8903 9.17562 62.7026 9.4749 62.4238 9.66404L63.5467 11.3191ZM62.9221 3.24745L62.9221 8.94999L64.9221 8.94999L64.9221 3.24745L62.9221 3.24745ZM59.5114 1.30737C61.0392 0.433158 62.9221 1.53489 62.9221 3.24745L64.9221 3.24745C64.9221 -0.0320439 61.3525 -2.05035 58.5182 -0.428535L59.5114 1.30737ZM23.3197 22.0166L59.5114 1.30737L58.5182 -0.428535L22.3264 20.2807L23.3197 22.0166Z" fill="url(#paint1_linear_12_51)" fillOpacity="0.3" mask="url(#path-1-inside-1_12_51)"/>
            <path d="M62.3642 21.2356C64.5453 22.4836 64.5453 25.6036 62.3642 26.8516L26.1725 47.5608C23.9914 48.8088 21.2651 47.2488 21.2651 44.7528L21.2651 3.33443C21.2651 0.838406 23.9914 -0.721615 26.1725 0.526396L62.3642 21.2356Z" fill="url(#paint2_linear_12_51)"/>
            <path d="M62.1159 26.4177L25.9241 47.1268C24.0697 48.188 21.7651 46.8571 21.7651 44.7528L21.7651 3.33443C21.7651 1.23014 24.0697 -0.100738 25.9241 0.960372L62.1159 21.6696C63.9614 22.7256 63.9614 25.3617 62.1159 26.4177Z" stroke="url(#paint3_linear_12_51)" strokeOpacity="0.3"/>
            <mask id="path-5-inside-2_12_51" fill="white">
            <path fillRule="evenodd" clipRule="evenodd" d="M41.0991 26.8516C43.2801 25.6036 43.2801 22.4836 41.0991 21.2356L4.90733 0.526396C2.72628 -0.721615 -3.00739e-05 0.838406 -3.0184e-05 3.33443L-3.04351e-05 9.02881C0.075615 9.70392 0.464973 10.2852 1.02031 10.6263L1.13802 10.6937C1.18913 10.7208 1.24147 10.7461 1.29492 10.7692L1.29492 10.7834L19.5613 21.2356C21.7423 22.4836 21.7423 25.6036 19.5613 26.8516L1.29492 37.3038L1.29492 37.312C1.27138 37.3222 1.24806 37.3328 1.22496 37.3438L0.938453 37.5078C0.426902 37.8542 0.071841 38.411 -3.17593e-05 39.0524L-3.20107e-05 44.7528C-3.21208e-05 47.2488 2.72627 48.8088 4.90732 47.5608L41.0991 26.8516Z"/>
            </mask>
            <path fillRule="evenodd" clipRule="evenodd" d="M41.0991 26.8516C43.2801 25.6036 43.2801 22.4836 41.0991 21.2356L4.90733 0.526396C2.72628 -0.721615 -3.00739e-05 0.838406 -3.0184e-05 3.33443L-3.04351e-05 9.02881C0.075615 9.70392 0.464973 10.2852 1.02031 10.6263L1.13802 10.6937C1.18913 10.7208 1.24147 10.7461 1.29492 10.7692L1.29492 10.7834L19.5613 21.2356C21.7423 22.4836 21.7423 25.6036 19.5613 26.8516L1.29492 37.3038L1.29492 37.312C1.27138 37.3222 1.24806 37.3328 1.22496 37.3438L0.938453 37.5078C0.426902 37.8542 0.071841 38.411 -3.17593e-05 39.0524L-3.20107e-05 44.7528C-3.21208e-05 47.2488 2.72627 48.8088 4.90732 47.5608L41.0991 26.8516Z" fill="url(#paint4_linear_12_51)"/>
            <path d="M41.0991 21.2356L40.6024 22.1035L40.6024 22.1035L41.0991 21.2356ZM41.0991 26.8516L40.6024 25.9837L40.6024 25.9837L41.0991 26.8516ZM4.90733 0.526396L4.41068 1.39435L4.41068 1.39435L4.90733 0.526396ZM-3.04351e-05 9.02881L-1.00003 9.02881L-1.00003 9.08466L-0.993811 9.14017L-3.04351e-05 9.02881ZM1.02031 10.6263L0.496954 11.4784L0.510187 11.4865L0.523667 11.4943L1.02031 10.6263ZM1.13802 10.6937L0.641373 11.5616L0.654853 11.5693L0.668565 11.5766L1.13802 10.6937ZM1.29492 10.7692L2.29492 10.7692L2.29492 10.1126L1.6924 9.8516L1.29492 10.7692ZM1.29492 10.7834L0.294922 10.7834L0.294922 11.3634L0.798273 11.6514L1.29492 10.7834ZM19.5613 21.2356L20.0579 20.3676L20.0579 20.3676L19.5613 21.2356ZM19.5613 26.8516L20.0579 27.7196L20.0579 27.7196L19.5613 26.8516ZM1.29492 37.3038L0.798272 36.4358L0.294921 36.7238L0.294921 37.3038L1.29492 37.3038ZM1.29492 37.312L1.69239 38.2296L2.29492 37.9687L2.29492 37.312L1.29492 37.312ZM1.22496 37.3438L0.795431 36.4408L0.761202 36.457L0.728304 36.4759L1.22496 37.3438ZM0.938453 37.5078L0.441797 36.6398L0.40897 36.6586L0.377655 36.6798L0.938453 37.5078ZM-3.17593e-05 39.0524L-0.993813 38.9411L-1.00003 38.9966L-1.00003 39.0524L-3.17593e-05 39.0524ZM4.90732 47.5608L5.40396 48.4288L4.90732 47.5608ZM40.6024 22.1035C42.1123 22.9675 42.1123 25.1197 40.6024 25.9837L41.5957 27.7196C44.4479 26.0875 44.4479 21.9997 41.5957 20.3676L40.6024 22.1035ZM4.41068 1.39435L40.6024 22.1035L41.5957 20.3676L5.40397 -0.341556L4.41068 1.39435ZM0.99997 3.33443C0.99997 1.62187 2.8829 0.520139 4.41068 1.39435L5.40397 -0.341556C2.56967 -1.96337 -1.00003 0.0549408 -1.00003 3.33443L0.99997 3.33443ZM0.99997 9.02881L0.99997 3.33443L-1.00003 3.33443L-1.00003 9.02881L0.99997 9.02881ZM1.54366 9.77419C1.24008 9.58773 1.0337 9.27398 0.993751 8.91746L-0.993811 9.14017C-0.882468 10.1339 -0.310136 10.9827 0.496954 11.4784L1.54366 9.77419ZM1.63466 9.8257L1.51695 9.75835L0.523667 11.4943L0.641373 11.5616L1.63466 9.8257ZM1.6924 9.8516C1.6635 9.83908 1.63517 9.82543 1.60747 9.8107L0.668565 11.5766C0.743095 11.6162 0.819434 11.653 0.897441 11.6868L1.6924 9.8516ZM2.29492 10.7834L2.29492 10.7692L0.294922 10.7692L0.294922 10.7834L2.29492 10.7834ZM20.0579 20.3676L1.79157 9.91549L0.798273 11.6514L19.0646 22.1035L20.0579 20.3676ZM20.0579 27.7196C22.9101 26.0875 22.9101 21.9997 20.0579 20.3676L19.0646 22.1035C20.5745 22.9675 20.5745 25.1197 19.0646 25.9837L20.0579 27.7196ZM1.79157 38.1717L20.0579 27.7196L19.0646 25.9837L0.798272 36.4358L1.79157 38.1717ZM0.294921 37.3038L0.294921 37.312L2.29492 37.312L2.29492 37.3038L0.294921 37.3038ZM0.897451 36.3944C0.863085 36.4093 0.829075 36.4248 0.795431 36.4408L1.65449 38.2469C1.66704 38.2409 1.67968 38.2352 1.69239 38.2296L0.897451 36.3944ZM1.43511 38.3757L1.72161 38.2118L0.728304 36.4759L0.441797 36.6398L1.43511 38.3757ZM0.377655 36.6798C-0.365947 37.1835 -0.888028 37.997 -0.993813 38.9411L0.993749 39.1638C1.03171 38.825 1.21975 38.525 1.49925 38.3357L0.377655 36.6798ZM0.999968 44.7528L0.999968 39.0524L-1.00003 39.0524L-1.00003 44.7528L0.999968 44.7528ZM4.41067 46.6929C2.88288 47.5671 0.999968 46.4654 0.999968 44.7528L-1.00003 44.7528C-1.00003 48.0323 2.56965 50.0506 5.40396 48.4288L4.41067 46.6929ZM40.6024 25.9837L4.41067 46.6929L5.40396 48.4288L41.5957 27.7196L40.6024 25.9837Z" fill="url(#paint5_linear_12_51)" fillOpacity="0.3" mask="url(#path-5-inside-2_12_51)"/>
            <defs>
            <linearGradient id="paint0_linear_12_51" x1="40.7485" y1="17.6984" x2="63.9221" y2="17.6984" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4B006F"/>
            <stop offset="1" stopColor="#AD00FF"/>
            </linearGradient>
            <linearGradient id="paint1_linear_12_51" x1="21.8036" y1="36.7112" x2="62.4087" y2="20.2283" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1"/>
            </linearGradient>
            <linearGradient id="paint2_linear_12_51" x1="21.197" y1="24.1787" x2="64" y2="24.1787" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4B006F"/>
            <stop offset="1" stopColor="#AD00FF"/>
            </linearGradient>
            <linearGradient id="paint3_linear_12_51" x1="63.3836" y1="11.289" x2="22.7786" y2="27.772" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1"/>
            </linearGradient>
            <linearGradient id="paint4_linear_12_51" x1="-0.0681924" y1="24.1787" x2="42.7349" y2="24.1787" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4B006F"/>
            <stop offset="1" stopColor="#AD00FF"/>
            </linearGradient>
            <linearGradient id="paint5_linear_12_51" x1="42.1185" y1="11.289" x2="1.51343" y2="27.772" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1"/>
            </linearGradient>
            </defs>
          </svg>
        </div>
        <h2>Venda</h2>
      </div>

      {route === 'signin' ? (
        <motion.div 
          style={{
            border: "1px solid #454754",
            padding: "12px 24px", 
            borderRadius: "12px", 
            cursor: "pointer ",
            height: 'fit-content',
            marginRight: '32px',
            color: '#CACDDB'
          }}
          whileHover={{
            backgroundColor: '#AD00FF',
            border: '1px solid #AD00FF'
          }}
          whileTap={{
            backgroundColor: '#7200A8'
          }}
          onClick={() => onRouteChange("register")}
        >
        Register
        </motion.div>
      ) : ( route === 'register' ? (
        <motion.div 
          style={{
            border: "1px solid #454754",
            padding: "12px 24px", 
            borderRadius: "12px", 
            cursor: "pointer ",
            height: 'fit-content',
            marginRight: '32px',
            color: '#CACDDB'
          }}
          whileHover={{
            backgroundColor: '#AD00FF',
            border: '1px solid #AD00FF'
          }}
          whileFocus={{
            backgroundColor: '#7200A8'
          }}
          onClick={() => onRouteChange("signin")}
        >
        Sign In
        </motion.div>
      ) : (
        <motion.div 
          style={{
            border: "1px solid #454754",
            padding: "12px 24px", 
            borderRadius: "12px", 
            cursor: "pointer ",
            height: 'fit-content',
            marginRight: '32px',
            color: '#CACDDB',
            fontWeight: '400'
          }}
          whileHover={{
            backgroundColor: '#AD00FF',
            border: '1px solid #AD00FF',
            color: '#292B34',
          }}
          whileFocus={{
            backgroundColor: '#7200A8'
          }}
          onClick={() => onRouteChange("signin")}
        >
        Sign Out
        </motion.div>
      )
      )}

    </div>
  )
}

export default Navigation