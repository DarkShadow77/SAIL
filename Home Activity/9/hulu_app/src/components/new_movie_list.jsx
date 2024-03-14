import NewMovieCard from "./new_movie_card"
import styles from "../assets/css/new_movie_list.module.css"

export default () => {

    const myList = [
        {
            title: "Poor Things",
            image: "https://img1.hulu.com/user/v3/artwork/72867b3c-0c4e-4107-aff7-a1f876c7242f?base_image_bucket_name=image_manager&base_image=9abd5058-4b1f-4198-a4bd-1e5de41edbcd&size=550x825&format=jpeg",
            title_image: "https://img1.hulu.com/user/v3/artwork/72867b3c-0c4e-4107-aff7-a1f876c7242f?base_image_bucket_name=image_manager&base_image=5ab8f60a-eac8-4979-a8e5-e74dfcbbe06e&size=210x42|max&format=png",
            description: "Brought back to life by an unorthodox scientist, a young woman runs off with a lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.",
            genre: "R • Comedy, Drama • Movie (2023)",
            rgb: "51, 153, 145"
        },
        {
            title: "Thirteen",
            image: "https://img1.hulu.com/user/v3/artwork/54291937-a01f-4f74-b73c-2070ac2a050b?base_image_bucket_name=image_manager&base_image=e27a13ce-2091-47fa-b307-dc1da8926d38&size=550x825&format=jpeg",
            title_image: "https://img1.hulu.com/user/v3/artwork/54291937-a01f-4f74-b73c-2070ac2a050b?base_image_bucket_name=image_manager&base_image=765edb3c-2769-46f4-a881-25538f84c4fb&size=210x42|max&format=png",
            description: "An innocent seventh grader undergoes an abrupt personality change when she begins hanging out with a wild classmate.",
            genre: "R • Drama • Movie (2003)",
            rgb: "153, 77, 51"
        },
        {
            title: "A Beautiful Day in the Neighborhood",
            image: "https://img3.hulu.com/user/v3/artwork/d418c399-53a5-4202-8cd4-da8896be34ad?base_image_bucket_name=image_manager&base_image=f4474246-c3a1-4de1-8491-1261ac9d9fff&size=550x825&format=jpeg",
            title_image: "https://img3.hulu.com/user/v3/artwork/d418c399-53a5-4202-8cd4-da8896be34ad?base_image_bucket_name=image_manager&base_image=a3d089fb-e269-482e-9d88-754c1ef0eaa8&size=210x42|max&format=png",
            description: "Based on the true story of a real-life friendship between Fred Rogers and journalist Tom Junod.",
            genre: "PG • Drama, Biography • Movie (2019)",
            rgb: "153, 51, 77"
        },
        {
            title: "Those Who Wish Me Dead",
            image: "https://img3.hulu.com/user/v3/artwork/2d9865be-fa7c-4d1d-80ab-307872be8867?base_image_bucket_name=image_manager&base_image=b7c633eb-d6ff-4328-8c72-d8c8b6158f26&size=550x825&format=jpeg",
            title_image: "https://img3.hulu.com/user/v3/artwork/2d9865be-fa7c-4d1d-80ab-307872be8867?base_image_bucket_name=image_manager&base_image=8861e0d4-b5c5-4f40-9169-0210f58a6382&size=210x42|max&format=png",
            description: "Angelina Jolie stars as a haunted smoke jumper who is determined to save a little boy from two killers and a raging forest fire.",
            genre: "R • Thriller, Action • Movie (2021)",
            rgb: "153, 51, 51"
        },
        {
            title: "St. Vincent",
            image: "https://img.hulu.com/user/v3/artwork/da2a80ad-489c-43bf-b506-f6e01ee55513?base_image_bucket_name=image_manager&base_image=66f2c483-084c-4cd2-9179-88401a04441b&size=550x825&format=jpeg",
            title_image: "https://img.hulu.com/user/v3/artwork/da2a80ad-489c-43bf-b506-f6e01ee55513?base_image_bucket_name=image_manager&base_image=332cc76b-e0f7-4143-bc26-576f12e34c97&size=210x42|max&format=png",
            description: "A hedonistic war veteran becomes an unlikely mentor for a 12-year-old boy.",
            genre: "PG-13 • Comedy, Drama • Movie (2014)",
            rgb: "51, 153, 145"
        },
    ];

    const myComponentList = [];

    myList.forEach(({title, image, rgb, title_image, description, genre}) => {
        myComponentList.push(<NewMovieCard title={title} image={image} rgb={rgb} title_image={title_image} description={description} genre={genre}/>);
    });

    return (
        <>
            <div id={styles.card_list}>
                {myComponentList}
            </div>
        </>
    )
}