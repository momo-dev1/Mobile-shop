import { HalfStarIcon, StarIcon, FillStarIcon } from '../../assets/icons';

const Stars = ({ stars, reviews }) => {
    const tempStars = Array.from({ length: 5 }, (_, index) => {
        const number = index + .5;
        return <span key={index}>
            {
                stars >= index + 1 ?
                    <FillStarIcon yellow /> :
                    stars >= number ?
                        <HalfStarIcon yellow /> :
                        <StarIcon yellow />
            }
        </span>
    });

    return (
        <div className="flex items-center ">
            {tempStars}
            <p className="text-sm ml-1">{stars} ({reviews})</p>
        </div>
    )
}

export default Stars