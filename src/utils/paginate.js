import _ from 'lodash';

export function paginate(item, pageNumber, pageSize){
    const starIndex = (pageNumber - 1) * pageSize;
   return _(item).slice(starIndex).take(pageSize).value
}