import { StarIcon } from '@heroicons/react/solid';

const StarRatings = (props) => {
  return (
        <>
            <div className="text-center justify-center p-2">
                <div className="flex justify-center flex-wrap">
                    { 
                        [...Array(props.number)].map(i => {
                            const ratingValue = i + 1;
                            return (
                                <>
                                    <label>
                                        <StarIcon className="w-5 text-yellow-500" />
                                    </label>
                                </>
                            )
                        }) 
                    }
                </div>
            </div>
        </>
    )
}

export default StarRatings