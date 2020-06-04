import { orderBy } from 'lodash';

const utils = {

    sortCollectionByKey: (direction, collection, key) => {
        return orderBy(
            collection, [item => item[key].toLowerCase()],
            [direction]
        );
    }
}

export default utils;