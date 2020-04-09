import React from "react"
import '../../App.css'
import '../components/bootstrap.css'
const ProductCard = (props) => {
    const { productData } = props
    const { author, title, review, desc, price, discount, image, stock } = productData
    let hargaDiskon = price - (price * (discount / 100))
    hargaDiskon = hargaDiskon.toFixed(2)
    return (
            <div className="row col-md-10 mb-5">
                <img src={image} className="col-md-6"/>
                <div className="col-md-6">
                    <p style={{ fontSize: "10px", color: "grey" }}>{author}</p>
                    <p style={{ fontSize: "14px", fontWeight: "bold" }}>{title}</p>
                    <p style={{ fontSize: "10px" }}>{review}/5 Review</p>
                    <p style={{ fontSize: "10px" }}>{desc}</p>
                    {
                        stock ?
                            (
                                <>
                                    {
                                        discount ?
                                            (
                                                <>
                                                    <p style={{ fontSize: "12px", fontWeight: "bold" }}>${hargaDiskon} <span style={{ marginLeft: "8px", fontSize: "12px", color: "grey", textDecoration: "line-through" }}>${price}</span></p>
                                                    <input className="ButtonTugas" type="button" value="BUY NOW" />
                                                </>
                                            )
                                            : (
                                                <>
                                                    <p style={{ fontSize: "12px", fontWeight: "bold", marginBottom: "25px" }}>${price}</p>
                                                    <input className="ButtonTugas" type="button" value="BUY NOW" />
                                                </>
                                            )
                                    }
                                </>
                            )
                            : (
                                <>
                                    {
                                        discount ?
                                            (
                                                <>
                                                    <p style={{ fontSize: "12px", fontWeight: "bold" }}>${hargaDiskon} <span style={{ marginLeft: "8px", fontSize: "12px", color: "grey", textDecoration: "line-through" }}>${price}</span></p>
                                                    <input className="buttonAbu" type="button" value="BUY NOW" />
                                                </>
                                            )
                                            : (
                                                <>
                                                    <p style={{ fontSize: "12px", fontWeight: "bold", marginBottom: "25px" }}>${price}</p>
                                                    <input className="buttonAbu" type="button" value="BUY NOW" />
                                                </>
                                            )
                                    }
                                </>
                            )
                    }
                </div>
            </div>
    )
}
//:)))
export default ProductCard