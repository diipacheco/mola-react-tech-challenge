import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Profile } from '../index';

jest.mock('../../../hooks/users', () => ({
  useUsers: () => ({
    usersList: [],
    userDetailed: {},
    fetchUsersList: jest.fn(),
    fetchUserDetailed: jest.fn(),
  }),
}));

jest.mock('../../../hooks/usePagination', () => ({
  usePagination: () => ({
    totalPages: 1,
    nextPage: jest.fn(),
    prevPage: jest.fn(),
    setPage: jest.fn(),
    firstContentIndex: 1,
    lastContentIndex: 1,
    page: 1,
  }),
}));

describe('Profile Page', () => {
  it('should be able to render the elements three correctly', () => {
    const container = render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>,
    );

    expect(container).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <div
              class="sc-bdvvtL fQAeue"
            >
              <div
                class="sc-gsDKAQ bDZOUP"
              >
                <div
                  class="sc-dkPtRN kLPkfh"
                />
                <h1 />
                <a
                  href="undefined"
                  rel="noreferrer"
                  target="_blank"
                >
                  @undefined
                </a>
                <div
                  class="sc-hKwDye ctOUML"
                >
                  <div>
                    <strong />
                    <p>
                      Repositories
                    </p>
                  </div>
                  <div>
                    <strong />
                    <p>
                      Followers
                    </p>
                  </div>
                  <div>
                    <strong />
                    <p>
                      Following
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>,
        "container": <div>
          <div
            class="sc-bdvvtL fQAeue"
          >
            <div
              class="sc-gsDKAQ bDZOUP"
            >
              <div
                class="sc-dkPtRN kLPkfh"
              />
              <h1 />
              <a
                href="undefined"
                rel="noreferrer"
                target="_blank"
              >
                @undefined
              </a>
              <div
                class="sc-hKwDye ctOUML"
              >
                <div>
                  <strong />
                  <p>
                    Repositories
                  </p>
                </div>
                <div>
                  <strong />
                  <p>
                    Followers
                  </p>
                </div>
                <div>
                  <strong />
                  <p>
                    Following
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>,
        "debug": [Function],
        "findAllByAltText": [Function],
        "findAllByDisplayValue": [Function],
        "findAllByLabelText": [Function],
        "findAllByPlaceholderText": [Function],
        "findAllByRole": [Function],
        "findAllByTestId": [Function],
        "findAllByText": [Function],
        "findAllByTitle": [Function],
        "findByAltText": [Function],
        "findByDisplayValue": [Function],
        "findByLabelText": [Function],
        "findByPlaceholderText": [Function],
        "findByRole": [Function],
        "findByTestId": [Function],
        "findByText": [Function],
        "findByTitle": [Function],
        "getAllByAltText": [Function],
        "getAllByDisplayValue": [Function],
        "getAllByLabelText": [Function],
        "getAllByPlaceholderText": [Function],
        "getAllByRole": [Function],
        "getAllByTestId": [Function],
        "getAllByText": [Function],
        "getAllByTitle": [Function],
        "getByAltText": [Function],
        "getByDisplayValue": [Function],
        "getByLabelText": [Function],
        "getByPlaceholderText": [Function],
        "getByRole": [Function],
        "getByTestId": [Function],
        "getByText": [Function],
        "getByTitle": [Function],
        "queryAllByAltText": [Function],
        "queryAllByDisplayValue": [Function],
        "queryAllByLabelText": [Function],
        "queryAllByPlaceholderText": [Function],
        "queryAllByRole": [Function],
        "queryAllByTestId": [Function],
        "queryAllByText": [Function],
        "queryAllByTitle": [Function],
        "queryByAltText": [Function],
        "queryByDisplayValue": [Function],
        "queryByLabelText": [Function],
        "queryByPlaceholderText": [Function],
        "queryByRole": [Function],
        "queryByTestId": [Function],
        "queryByText": [Function],
        "queryByTitle": [Function],
        "rerender": [Function],
        "unmount": [Function],
      }
    `);
  });
});
