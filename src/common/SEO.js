import React from 'react'
import PropTypes from "prop-types";


const SEO = ( {title} ) => {
    return (
        <>
            <meta charSet="utf-8" />
            <title>Ovanim | {title}</title>
            <meta name="robots" content="noindex, follow" />
            <meta name="description" content="Ovanim is transforming physical security with computer vision intelligence, empowering security teams with automated threat detection and visual" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </>
    )
}
SEO.propTypes = {
    title: PropTypes.string
};

export default SEO;