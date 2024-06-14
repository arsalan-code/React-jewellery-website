import React from 'react'
import './Stylesheet/blog.css'
import { Link } from 'react-router-dom'
import blog from '../assets/images/img_blog1.jpg'
import blog1 from '../assets/images/img_blog1.png'
import blog2 from '../assets/images/img_blog2.png'
import Newsletter from '../Newsletter/Newsletter'


function Blog() {
  return (
    <>

      <div className="blog-container">
        <ul className='blog-list'>
          <li className='navItems'>
            <Link to="/">Home</Link>
          </li>
          <li className='navItems'>
            <Link to="/blog">Blogs Columns</Link>
          </li>
        </ul>
      </div>

      {/* ................ */}

      <div className="container inner-glogs">
        <div className="row">
          <div className="col-12">
            <div className="inner-date">
             <h3>Vel Illum Qui Dolorem Eum Fugiat</h3>
            </div>
            <img src={blog} class="img-fluid" alt="Responsive image" />
          </div>
          <div className="col-12 col-lg-12">
            <p>Shoe street style leather tote oversized sweatshirt A.P.C. Prada Saffiano crop slipper denim shorts spearmint. Braid skirt round sunglasses seam leather vintage Levi plaited. Flats holographic Acne grunge collarless denim chunky sole cuff tucked t-shirt strong eyebrows. Clutch center part dress dungaree slip dress. Skinny jeans knitwear minimal tortoise-shell sunglasses Céline sandal Cara D. lilac. Black floral 90s oxford chambray bomber powder blue cotton boots print. Cable knit knot ponytail ribbed sneaker sports luxe pastel Paris. Washed out skort white shirt Hermès vintage Givenchy razor pleats.

              Tee loafer knot ponytail sandal shoe oversized sweatshirt Maison Martin Margiela chunky sole spearmint. Jil Sander Vasari denim vintage So-Cal envelope clutch gold collar Prada Saffiano Acne. Navy blue flats metallic bandeau skort denim shorts white shirt white. Cotton knitwear slip dress seam Givenchy bandeau maxi.

              Lanvin flats seam cotton minimal Saint Laurent midi Céline la marinière. Powder blue playsuit oversized sweatshirt bomber chunky sole street style chignon vintage. Dress Jil Sander Vasari chambray boots luxe. Statement button up navy blue slip dress skinny jeans indigo white shirt.

              Maison Martin Margiela cami texture la marinière ecru envelope clutch So-Cal relaxed silhouette. Cashmere chunky sole center part round sunglasses holographic skirt sneaker Acne bandeau. Leggings Lanvin plaited ribbed sports luxe Paris white metallic cami. Givenchy clutch black Furla navy blue grunge dress luxe. Oversized sweatshirt strong eyebrows knot ponytail indigo playsuit A.P.C. Floral gold collar Maison Martin Margiela vintage relaxed la marinière statement button up tee. Razor pleats chignon boots So-Cal cable knit seam denim chambray flats Prada Saffiano. Leather leather tote neutral denim shorts collarless Cara D. washed out. 90s vintage Levi texture envelope clutch crop ecru skinny jeans. Rings loafer Céline pastel sandal dove grey cotton Hermès.</p>
              <ul class="post list-inline d-flex justify-content-between align-items-center">
															<li class="author">Jin Alkaid</li>
															 
															<li class="post-action">
															<a class="btn btn-1 enable hidden-xs" href="#" title="Add your thoughts">Post Comment</a>
															</li>
														</ul>
          </div>
          <div className="col-12 mt-5">
          <div className="inner-date">
             <h3>Vel Illum Qui Dolorem Eum Fugiat</h3>
            </div>
            <img src={blog2} class="img-fluid" alt="Responsive image" />
          </div>
          <div className="col-12 col-lg-12">
            <p>Shoe street style leather tote oversized sweatshirt A.P.C. Prada Saffiano crop slipper denim shorts spearmint. Braid skirt round sunglasses seam leather vintage Levi plaited. Flats holographic Acne grunge collarless denim chunky sole cuff tucked t-shirt strong eyebrows. Clutch center part dress dungaree slip dress. Skinny jeans knitwear minimal tortoise-shell sunglasses Céline sandal Cara D. lilac. Black floral 90s oxford chambray bomber powder blue cotton boots print. Cable knit knot ponytail ribbed sneaker sports luxe pastel Paris. Washed out skort white shirt Hermès vintage Givenchy razor pleats.

              Tee loafer knot ponytail sandal shoe oversized sweatshirt Maison Martin Margiela chunky sole spearmint. Jil Sander Vasari denim vintage So-Cal envelope clutch gold collar Prada Saffiano Acne. Navy blue flats metallic bandeau skort denim shorts white shirt white. Cotton knitwear slip dress seam Givenchy bandeau maxi.

              Lanvin flats seam cotton minimal Saint Laurent midi Céline la marinière. Powder blue playsuit oversized sweatshirt bomber chunky sole street style chignon vintage. Dress Jil Sander Vasari chambray boots luxe. Statement button up navy blue slip dress skinny jeans indigo white shirt.

              Maison Martin Margiela cami texture la marinière ecru envelope clutch So-Cal relaxed silhouette. Cashmere chunky sole center part round sunglasses holographic skirt sneaker Acne bandeau. Leggings Lanvin plaited ribbed sports luxe Paris white metallic cami. Givenchy clutch black Furla navy blue grunge dress luxe. Oversized sweatshirt strong eyebrows knot ponytail indigo playsuit A.P.C. Floral gold collar Maison Martin Margiela vintage relaxed la marinière statement button up tee. Razor pleats chignon boots So-Cal cable knit seam denim chambray flats Prada Saffiano. Leather leather tote neutral denim shorts collarless Cara D. washed out. 90s vintage Levi texture envelope clutch crop ecru skinny jeans. Rings loafer Céline pastel sandal dove grey cotton Hermès.</p>
              <ul class="post list-inline d-flex justify-content-between align-items-center">
															<li class="author">Jin Alkaid</li>
															 
															<li class="post-action">
															<a class="btn btn-1 enable hidden-xs" href="#" title="Add your thoughts">Post Comment</a>
															</li>
														</ul>
          </div>
          <div className="col-12 mt-5">
          <div className="inner-date">
             <h3>Vel Illum Qui Dolorem Eum Fugiat</h3>
            </div>
            <img src={blog1} class="img-fluid" alt="Responsive image" />
          </div>
          <div className="col-12 col-lg-12 mt-4">
            <p>Shoe street style leather tote oversized sweatshirt A.P.C. Prada Saffiano crop slipper denim shorts spearmint. Braid skirt round sunglasses seam leather vintage Levi plaited. Flats holographic Acne grunge collarless denim chunky sole cuff tucked t-shirt strong eyebrows. Clutch center part dress dungaree slip dress. Skinny jeans knitwear minimal tortoise-shell sunglasses Céline sandal Cara D. lilac. Black floral 90s oxford chambray bomber powder blue cotton boots print. Cable knit knot ponytail ribbed sneaker sports luxe pastel Paris. Washed out skort white shirt Hermès vintage Givenchy razor pleats.

              Tee loafer knot ponytail sandal shoe oversized sweatshirt Maison Martin Margiela chunky sole spearmint. Jil Sander Vasari denim vintage So-Cal envelope clutch gold collar Prada Saffiano Acne. Navy blue flats metallic bandeau skort denim shorts white shirt white. Cotton knitwear slip dress seam Givenchy bandeau maxi.

              Lanvin flats seam cotton minimal Saint Laurent midi Céline la marinière. Powder blue playsuit oversized sweatshirt bomber chunky sole street style chignon vintage. Dress Jil Sander Vasari chambray boots luxe. Statement button up navy blue slip dress skinny jeans indigo white shirt.

              Maison Martin Margiela cami texture la marinière ecru envelope clutch So-Cal relaxed silhouette. Cashmere chunky sole center part round sunglasses holographic skirt sneaker Acne bandeau. Leggings Lanvin plaited ribbed sports luxe Paris white metallic cami. Givenchy clutch black Furla navy blue grunge dress luxe. Oversized sweatshirt strong eyebrows knot ponytail indigo playsuit A.P.C. Floral gold collar Maison Martin Margiela vintage relaxed la marinière statement button up tee. Razor pleats chignon boots So-Cal cable knit seam denim chambray flats Prada Saffiano. Leather leather tote neutral denim shorts collarless Cara D. washed out. 90s vintage Levi texture envelope clutch crop ecru skinny jeans. Rings loafer Céline pastel sandal dove grey cotton Hermès.</p>
          </div>
                        <ul class="post list-inline d-flex justify-content-between align-items-center">
															<li class="author">Jin Alkaid</li>
															 
															<li class="post-action">
															<a class="btn btn-1 enable hidden-xs" href="#" title="Add your thoughts">Post Comment</a>
															</li>
														</ul>
        </div>
      </div>
        <Newsletter/>

    </>
  )
}

export default Blog