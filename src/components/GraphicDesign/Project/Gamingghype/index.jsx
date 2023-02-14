import GD from "../../GD";

const Gaming = () => {
    return (
        <div className="sia">
            <GD
                header="/assets/Portfolio/Graphic/Gaming/Header.png"

                nama="SIA THE LABEL"

                services={[<p>Logo</p>, <p>Brand Identity</p>]}

                atas="Gaming The Label is a fashion brand for young women who want to express their individuality through their style. It offer a curated collection of on-trend and fashionable products that cater to the unique needs and tastes of young women. From casual streetwear to elegant partywear, The collection empowers young women to embrace their personal style and feel confident, beautiful, and stylish every day."

                bawah="As a freelance graphic designer, I am proud to have created a memorable and impactful logo and brand identity for my client, Gaming The Label, a fashion brand. My understanding of the fashion industry and my expertise in graphic design allowed me to craft a logo and brand identity that accurately reflects the unique essence and values of the client. With a keen eye for detail and a commitment to quality, I was able to deliver a design that not only looks great but also effectively communicates the client's message to their target audience in the fashion industry. I am dedicated to providing exceptional service and delivering results that exceed my client's expectations."

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