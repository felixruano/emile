import PropTypes from 'prop-types';

/*
* Square Dots Design takes in side prop.
* Defaults to right hand side of page.
*/
const SquareDotsDesign = ({ side }) => (
    <svg
        className={
            side === 'right'
                ? 'absolute right-full bottom-0 transform -translate-x-1/2'
                : 'absolute left-full transform translate-x-1/2'
        }
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
    >
        <defs>
            <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
            >
                <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                />
            </pattern>
        </defs>
        <rect
            width="404"
            height="404"
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
        />
    </svg>
);

SquareDotsDesign.propTypes = {
    side: PropTypes.string,
};

SquareDotsDesign.defaultProps = {
    side: 'right',
};

export default SquareDotsDesign;
