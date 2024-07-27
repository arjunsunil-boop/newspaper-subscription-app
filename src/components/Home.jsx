import React from 'react'

const Home = () => {
    return (
        <div>

            <div className="container">
                <h2>TOP NEWS...</h2>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <br /><br /><br /><br />
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <div id="carouselExampleCaptions" class="carousel slide">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="https://images.indianexpress.com/2024/07/Paris-Olympics-2024-India-vs-New-Zealand-hockey-live-India-vs-New-Zealand-hockey-match-IND-vs-NZ-hockey-at-paris-Olympics.jpg?w=750" class="d-block w-100" alt="Bus 1" />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>India vs New Zealand Live Score, Olympics 2024: Harmanpreet Singh gives IND 3-2 lead with 2 minutes left</h5>
                                                <p>India vs New Zealand Hockey Live Score, Paris Olympics 2024: Indians are clubbed along side reigning champions Belgium, mighty Australia, Argentina, New Zealand and Ireland in a tough Pool B.</p>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://images.indianexpress.com/2024/07/view-from-pak.jpg?w=640" class="d-block w-100" alt="Bus 2" />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>A missing Hindu child in Sindh and how Pakistan’s image as an ‘unsafe’ nation hurts tourism</h5>
                                                <p>View from Pakistan: A cold war between Imran Khan’s PTI and the PML-N; US election drama — choosing between war apologists and a populist convicted on felony charges; the curious missing case of Priya Kumari; ease in visa policy.</p>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://images.indianexpress.com/2024/07/mamata-pulse-1600-1.jpg?w=640" class="d-block w-100" alt="Bus 3" />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>Mamata Banerjee storms out of NITI meet, says mic switched off during speech, FM rejects charge</h5>
                                                <p>Unfair, insulting… I was lone Opposition voice there, Centre shouldn’t discriminate: West Bengal CM
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>

                            </div>

                            <div className="col col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                            </div>
                            <div className="col col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                            </div>
                            <div className="col col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                            </div>
                            <div className="col col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                            </div>



                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <br /><br />

                                <p>View more of our buses by clicking the button below!</p>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                                <a href="/view" class="btn btn-secondary">View More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br /><br />
            </div>
        </div>
    )
}

export default Home