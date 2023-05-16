function HomePage(props) {
    return (
        <section className="home-page">
            <h2>Amazing Cups of Coffee</h2>
            <figure className="featured-figure">
                <img referrerPolicy="no-referrer" alt="Coffee Recipes" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyNbaHLjqO_DG-Xk0KyRsHzAL52h7sAEahVQ&usqp=CAU" className="featured-image" />
                <figcaption>The Best Coffee Recipes</figcaption>
            </figure>
        </section>
    );
}

export default HomePage;