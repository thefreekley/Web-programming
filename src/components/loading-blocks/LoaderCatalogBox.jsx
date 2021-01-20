import React from 'react';
import ContentLoader from "react-content-loader";

function LoaderCatalogBox(props) {
    return (
        <div className="catalog-box">
            <ContentLoader
                speed={2}
                width={300}
                height={700}
                viewBox="0 0 300 700"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="300" rx="0" ry="0" width="300" height="58" />
                <rect x="0" y="374" rx="0" ry="0" width="300" height="199" />
                <rect x="0" y="593" rx="5" ry="5" width="296" height="26" />
                <rect x="-3" y="628" rx="0" ry="0" width="303" height="23" />
                <rect x="-1" y="-7" rx="45" ry="45" width="300" height="298" />
            </ContentLoader>
        </div>
    );
}

export default LoaderCatalogBox;