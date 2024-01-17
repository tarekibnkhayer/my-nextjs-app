import Image from 'next/image';
import logoImage from "@/assests/careerCanvas.png";

const AlbumPage = () => {
    return (
        <div>
            <h1>Image display using Image component</h1>
            <Image src="https://i.ibb.co/BrGbYF3/Nice-Job-Logo.jpg" alt='job landing logo' width={500} height={500} />
            <Image src={logoImage} alt='job landing logo' width={500} height={500} />
            <h1>Image display using img tag</h1>
            {/* <img src="https://i.ibb.co/BrGbYF3/Nice-Job-Logo.jpg" alt='job landing logo' width="500px" height="500px"  /> */}
        </div>
    );
};

export default AlbumPage;