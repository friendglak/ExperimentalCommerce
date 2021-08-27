import React, { useState, useEffect } from "react";
import { Button, Button2 } from "../../globalStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductStart,
  fetchProductsStart,
  deleteProductStart,
} from "./../../redux/Products/products.actions";
import FormInput from "./../../components/FormInput/index";
// import CKEditor from "ckeditor4-react";
import FormSelect from "./../../components/FormSelect/index";
import LoadMore from "./../../components/LoadMore/index";

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const Admin = (props) => {
  const { products } = useSelector(mapState);
  const dispatch = useDispatch();
  const [productCategory, setProductCategory] = useState("mens");
  const [productName, setProductName] = useState("");
  const [productThumbnail, setProductThumbnail] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDesc, setProductDesc] = useState("");

  const { data, queryDoc, isLastPage } = products;

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, []);

  const resetForm = () => {
    setProductCategory("mens");
    setProductName("");
    setProductThumbnail("");
    setProductPrice(0);
    setProductDesc("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addProductStart({
        productCategory,
        productName,
        productThumbnail,
        productPrice,
        productDesc,
      })
    );
    resetForm();
  };

  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart({
        startAfterDoc: queryDoc,
        persistProducts: data,
      })
    );
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };

  return (
    <div className="admin">
      <div>
        <h1 style={{ textAlign: "center" }}>NUEVOS PRODUCTOS</h1>
        <div>
          <form
            style={{ margin: "20px 200px", textAlignLast: "center" }}
            onSubmit={handleSubmit}
          >
            <h3>Categoria</h3>
            <FormSelect
              options={[
                {
                  value: "mens",
                  name: "Mens",
                },
                {
                  value: "womens",
                  name: "Womens",
                },
              ]}
              handleChange={(e) => setProductCategory(e.target.value)}
            />
            <h3>Nombre</h3>
            <FormInput
              type="text"
              value={productName}
              handleChange={(e) => setProductName(e.target.value)}
            />
            <h3>URL Imagen</h3>
            <FormInput
              type="url"
              value={productThumbnail}
              handleChange={(e) => setProductThumbnail(e.target.value)}
            />
            <h3>Precio</h3>
            <FormInput
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={productPrice}
              handleChange={(e) => setProductPrice(e.target.value)}
            />

            {/* <CKEditor onChange={(evt) => setProductDesc(evt.editor.getData())} /> */}

            <br />
            <Button2 style={{ width: "400px", margin: "auto" }} type="submit">
              AÑADIR PRODUCTO
            </Button2>
          </form>
        </div>
      </div>
      <div className="manageProducts">
        <table border="0" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <td>
                <table
                  className="results"
                  border="0"
                  cellPadding="10"
                  cellSpacing="0"
                >
                  <tbody>
                    {Array.isArray(data) &&
                      data.length > 0 &&
                      data.map((product, index) => {
                        const {
                          productName,
                          productThumbnail,
                          productPrice,
                          documentID,
                        } = product;

                        return (
                          <tr key={index}>
                            <td>
                              <img className="thumb" src={productThumbnail} />
                            </td>
                            <td>{productName}</td>
                            <td>£{productPrice}</td>
                            <td>
                              <Button
                                onClick={() =>
                                  dispatch(deleteProductStart(documentID))
                                }
                              >
                                Delete
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td>
                <table border="0" cellPadding="10" cellSpacing="0">
                  <tbody>
                    <tr>
                      {
                        <td>
                          {!isLastPage && <LoadMore {...configLoadMore} />}
                        </td>
                      }
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
