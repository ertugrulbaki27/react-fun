import React, {Component} from 'react';
import PropTypes from 'prop-types';

export const Book = ({title="No title provided", author="No author", pages=0, freeBookmark}) => {

    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages} page</p>
            <p>Free Bookmark Today: {freeBookmark ? 'yes': 'no'}</p>

        </section>
    )
}


Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookmark: PropTypes.bool
}