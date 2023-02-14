import GD from "../../GD";

const Gaming = () => {
    return (
        <div className="sia">
            <GD
                header="/assets/Portfolio/Graphic/Gaming/Header.png"

                nama="GAMINGGHYPE"

                services={[<p>Logo</p>, <p>Social Media</p>]}

                atas="As a graphic designer, I am proud to present my latest work for Gamingghype, a brand for the Sale and Purchase of Used Ps4 Game Cassettes. The brand is targeted towards a young demographic between the ages of 20 and 30, and I wanted to capture their playful and adventurous spirit in the design. I chose to use a black and white color scheme with fun and bold designs to create a modern and eye-catching look for the brand."

                bawah="The logo features a stylized representation of a game cassette with the brand name prominently displayed. The social media posters use the same playful design elements to showcase the wide variety of games available for purchase through the brand. I wanted to create a brand that was both professional and fun, and I believe that the final result captures that perfectly. I am confident that my design will help Gamingghype stand out in a crowded market and attract the attention of the target demographic."

                image={
                    [
                        <img src="/assets/Portfolio/Graphic/Gaming/1.png" alt="img1" />,
                        <img src="/assets/Portfolio/Graphic/Gaming/2.png" alt="img1" />,
                        <img src="/assets/Portfolio/Graphic/Gaming/3.png" alt="img1" />,
                        <img src="/assets/Portfolio/Graphic/Gaming/4.png" alt="img1" />,
                        <img src="/assets/Portfolio/Graphic/Gaming/5.png" alt="img1" />,
                        <img src="/assets/Portfolio/Graphic/Gaming/6.png" alt="img1" />,
                        <img src="/assets/Portfolio/Graphic/Gaming/7.png" alt="img1" />,
                    ]
                } />
        </div>
    );
}

export default Gaming;