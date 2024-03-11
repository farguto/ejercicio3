import Link from '../../components/UI/Link/Link';

import {
  FoundContainerStyled,
  FoundSubtitleStyled,
  FoundTextStyled,
  FoundTitleStyled,
} from './PageNotFoundStyles';

const PageNotFound = () => {
  return (
    <div>
      <FoundContainerStyled>
        <FoundTextStyled>
          <FoundTitleStyled>404 Error</FoundTitleStyled>
          <FoundSubtitleStyled> Error</FoundSubtitleStyled>
          <p> No existe la página</p>
          <Link />
        </FoundTextStyled>
        <img
            src="https://res.cloudinary.com/dv9a5qgfw/image/upload/v1710187795/webydatos.png"
            
          alt='No existe la pagina'
          className='imgNotFound'
        />
      </FoundContainerStyled>
    </div>
  );
};

export default PageNotFound;
