import {useRouter} from 'next/router'

const Products = () => {
    const router = useRouter()
    const { slug } = router.query

    return (
        <div>Posts slug: {slug}</div>
    )
}

export default Products