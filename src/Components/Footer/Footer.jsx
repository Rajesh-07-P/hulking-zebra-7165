

export default function Footer(){

    return (
        <>
        <hr style={{color:'lightGrey'}}/>
        <div style={{maxWidth:"1200px", margin:'auto' ,display:'grid', gridTemplateColumns:'repeat(5,1fr)',lineHeight:'10px',textAlign:'start'}}>
            <div>
                <h4>Women</h4>
                <p>Tops</p>
                <p>Ethnicwear</p>
                <p>Bottoms</p>
                <p>Dresses & Jumpsuits</p>
                <p>Winterwear</p>
                <p>Lingerie</p>
                <p>Nightwear</p>
                <p>Sportswear</p>
                <p>Beauty</p>
                <p>Watches & Sunglasses</p>
            </div>
            <div>
            <h4>Men</h4>
                <p>Tops</p>
                <p>Bottoms</p>
                <p>Ethnicwear</p>
                <p>Winterwear</p>
                <p>Sportswear</p>
                <p>Innerwear</p>
                <p>Grooming</p>
                <p>Watches</p>
                <p>Sunglasses</p>
            </div>
            <div>
            <h4>Kids</h4>
                <p>Girls Clothing</p>
                <p>Boys Clothing</p>
                <p>Infants Girls</p>
                <p>Infants Boys</p>
                <p>Winterwear</p>
                <p>Add ons</p>
                <p>The Teen Shop</p>
            </div>
            <div>
            <h4>Shoes & Bags</h4>
                <p>Women</p>
                <p>Men</p>
                <p>Boys</p>
                <p>Girls</p>
                <p>Women Accessories</p>
                <p>Men Accessories</p>
                <p>Essential</p>
            </div>
            <div>
            <h4>Beauty</h4>
                <p>Makeup Eyes</p>
                <p>Makeup Face</p>
                <p>Makeup Lips</p>
                <p>Makeup Nails</p>
                <p>Perfumes</p>
            </div>
            <div>
            <h4>Explore</h4>
                <p>Online Offers</p>
                <p>Store Offers</p>
                <p>Online Gift Card</p>
                <p>Store Gift Card</p>
                <p>Stores Nearby</p>
                <p>EDGE Membership</p>
                <p>Shop on WhatsApp</p>
                <p>Fashion VLOG</p>
                <p>Join CIRCLEMAG</p>
                <p>SBI Offers</p>
                <p>Homecentre</p>
            </div>
            <div>
            <h4>About</h4>
                <p>About us</p>
                <p>Careers</p>
                <p>Take a Tour</p>
                <p>Blog</p>
                <p>Store Locator</p>
                <p>Landmark Cares</p>
            </div>
            <div>
            <h4>Help</h4>
                <p>Contact us</p>
                <p>Shipping</p>
                <p>Returns Process</p>
                <p>Returns Policy</p>
                <p>Help Centre</p>
            </div>
        </div>
        <div style={{display:'flex', justifyContent:'left',alignItems:'start'}}>
            <div style={{display:'inline-block',}}>
                <img style={{width:'200px'}} src="data:image/png;base64,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" alt="" />
                <div style={{display:'inline-block',width:'400px'}}>© 2022 RNA Intellectual Property Limited.Terms & Conditions - Privacy Policy</div>
            </div>
        </div>
        </>
    )
}