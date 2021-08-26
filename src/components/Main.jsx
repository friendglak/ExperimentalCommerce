import React from 'react';
import {
    PresentationSec,
    ContainerCategorias,
    CategoriaHombre,
    CategoriaMujer,
    ButtonCategoria
} from '../style/PresentationStyles';

const Main = ({
    lightBg,

}) => {
    return (
        <>
            <PresentationSec lightBg={lightBg} />
            <ContainerCategorias>
                <CategoriaHombre>
                    <ButtonCategoria>HOMBRE</ButtonCategoria>
                </CategoriaHombre>
                <CategoriaMujer>
                    <ButtonCategoria>MUJER</ButtonCategoria>
                </CategoriaMujer>
            </ContainerCategorias>
        </>
    );
};

export default Main;
