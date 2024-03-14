import PopularMovieCard from "./popular_movie_card"
import styles from "../assets/css/new_movie_list.module.css"

export default () => {

    const myList = [
        {
            title: "Dune",
            image: "https://img3.hulu.com/user/v3/artwork/c5682975-40cf-4a49-93d4-af29bc930964?base_image_bucket_name=image_manager&base_image=68c8ea1b-c32a-4b56-b22a-ed3ca59fd197&size=600x338&format=jpeg",
            genre: "PG-13 • Adventure, Science Fiction • Movie (2021)"
        },
        {
            title: "Poor Things",
            image: "https://img1.hulu.com/user/v3/artwork/72867b3c-0c4e-4107-aff7-a1f876c7242f?base_image_bucket_name=image_manager&base_image=cd5d8896-2b9c-416d-8ed6-136fd5845802&size=600x338&format=jpeg",
            genre: "R • Comedy, Drama • Movie (2023)"
        },
        {
            title: "Straight Outta Compton",
            image: "https://img1.hulu.com/user/v3/artwork/a32f9ed4-5820-4dc0-8551-ac6d87961024?base_image_bucket_name=image_manager&base_image=9d35bc1c-4cd8-435c-b74f-08c76a56c938&size=600x338&format=jpeg",
            genre: "R • Drama, Biography • Movie (2015)"
        },
        {
            title: "Black Phone",
            image: "https://img2.hulu.com/user/v3/artwork/8ab90d8f-30a4-4c1d-96ce-8dc8d5815493?base_image_bucket_name=image_manager&base_image=f17b1c58-2839-422b-b8c8-a6168a6fae71&size=600x338&format=jpeg",
            genre: "R • Horror, Thriller • Movie (2022)"
        },
        {
            title: "Barbie",
            image: "https://img3.hulu.com/user/v3/artwork/2f42a63a-9aea-4c66-9e34-adfee458f95c?base_image_bucket_name=image_manager&base_image=4e9c0f41-a43f-493b-8e6d-2e0d467e8250&size=600x338&format=jpeg",
            genre: "R • Thriller, Action • Movie (2021)"
        },
        {
            title: "The Wolf of Wall Street",
            image: "https://img2.hulu.com/user/v3/artwork/4ee4f57e-19bd-493f-96f9-ad3e753af981?base_image_bucket_name=image_manager&base_image=8c10aa45-5597-4587-aca1-d3ecda4ef168&size=600x338&format=jpeg",
            genre: "R • Biography, Drama • Movie (2013)"
        },
    ];

    const myComponentList = [];

    myList.forEach((item, index) => {
        myComponentList.push(<PopularMovieCard title={item.title} image={item.image} genre={item.genre}/>);
    });

    return (
        <>
            <div id={styles.card_list}>
                {myComponentList}
            </div>
        </>
    )
}