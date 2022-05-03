import CameraImg from "./icons/camera.png"
import DealsImg from "./icons/deals-icon.png"
import FriendsImg from "./icons/better-friends.png"
import ShippingImg from "./icons/free-shipping.webp"
import PlanImg from "./icons/plan-icon.png"
import OveragesImg from "./icons/no-overages.webp"
import PhoneImg from "./icons/smartphone-icon.png"
import StorageImg from "./icons/storage.webp"
import ScreenSize from "./icons/screen-size.png"
import ArrowImg from "./icons/arrow.png"

export const CameraIcon = ({ className = "" }) => (
    <img className={className} src={CameraImg} alt="camera Icon" />
);
export const DealsIcon = ({ className = "" }) => (
    <img className={className} src={DealsImg} alt="deals Icon" />
);
export const FriendsIcon = ({ className = "" }) => (
    <img className={className} src={FriendsImg} alt="friends Icon" />
);
export const ShippingIcon = ({ className = "" }) => (
    <img className={className} src={ShippingImg} alt="shipping Icon" />
);
export const OveragesIcon = ({ className = "" }) => (
    <img className={className} src={OveragesImg} alt="overages Icon" />
);
export const PlanIcon = ({ className = "" }) => (
    <img className={className} src={PlanImg} alt="plan Icon" />
);
export const ScreenSizeIcon = ({ className = "" }) => (
    <img className={className} src={ScreenSize} alt="screen Icon" />
);
export const PhoneIcon = ({ className = "" }) => (
    <img className={className} src={PhoneImg} alt="phone Icon" />
);
export const StorageIcon = ({ className = "" }) => (
    <img className={className} src={StorageImg} alt="storage Icon" />
);
export const ArrowIcon = ({ rotate = "" }) => (
    <img className={`${ rotate ? "-rotate-90" : "rotate-90" } h-4 mt-1`} src={ArrowImg} alt="arrow Icon" />
);
export const FillStarIcon = ({ yellow }) => (
    <svg className={`${ yellow ? "text-yellow-500" : "text-green-800" } w-4 h-4`} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M394 480a16 16 0 0 1-9.39-3L256 383.76 127.39 477a16 16 0 0 1-24.55-18.08L153 310.35 23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480z" /></svg>
);
export const HalfStarIcon = ({ yellow }) => (
    <svg className={`${ yellow ? "text-yellow-500" : "text-green-800" } w-4 h-4`} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" /><path d="M256 48v316L118 464l54-160-140-96h172l52-160z" /></svg>
);
export const StarIcon = ({ yellow }) => (
    <svg className={`${ yellow ? "text-yellow-500" : "text-green-800" } w-4 h-4`} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" d><path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" /></svg>
);
export const SearchIcon = () => (
    <svg className="absolute right-3 z-10 cursor-pointer" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="#E1DFE1" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 21L15 15" stroke="#E1DFE1" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

