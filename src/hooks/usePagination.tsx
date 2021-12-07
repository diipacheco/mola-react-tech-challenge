import { useState, useMemo, useCallback } from 'react';

interface IUsePaginationParams {
  contentPerPage: number;
  count: number;
}

export const usePagination = ({ contentPerPage, count }: IUsePaginationParams) => {
  const [page, setPage] = useState(1);

  const pageCount = useMemo(() => Math.ceil(count / contentPerPage), [count, contentPerPage]);
  const lastContentIndex = page * contentPerPage;
  const firstContentIndex = lastContentIndex - contentPerPage;

  const changePage = useCallback((direction: boolean) => {
    setPage((pageNumber) => {
      if (direction) {
        if (pageNumber === pageCount) {
          return pageNumber;
        }
        return pageNumber + 1;
      }
      if (pageNumber === 1) {
        return pageNumber;
      }
      return pageNumber - 1;
    });
  }, [pageCount]);

  const setPageSAFE = useCallback((num: number) => {
    if (num > pageCount) {
      setPage(pageCount);
    } else if (num < 1) {
      setPage(1);
    } else {
      setPage(num);
    }
  }, [pageCount]);

  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage: setPageSAFE,
    firstContentIndex,
    lastContentIndex,
    page,
  };
};
