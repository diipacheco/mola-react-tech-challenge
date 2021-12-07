import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { UserCard } from '../index';

describe('UserCard Component', () => {
  it('should be able to render the elements three correctly', () => {
    const userData = {
      login: 'mojombo',
      id: 1,
      avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
      html_url: 'https://github.com/mojombo',
    };

    const container = render(
      <BrowserRouter>
        <UserCard userData={userData} />
      </BrowserRouter>,
    );

    expect(container).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <div
              class="sc-bdvvtL bwjIvI"
            >
              <div
                class="sc-gsDKAQ ejTjsX"
              />
              <h1>
                <a
                  href="https://github.com/mojombo"
                  rel="noreferrer"
                  target="_blank"
                >
                  @mojombo
                </a>
              </h1>
              <a
                href="/profile/mojombo"
              >
                See profile
              </a>
            </div>
          </div>
        </body>,
        "container": <div>
          <div
            class="sc-bdvvtL bwjIvI"
          >
            <div
              class="sc-gsDKAQ ejTjsX"
            />
            <h1>
              <a
                href="https://github.com/mojombo"
                rel="noreferrer"
                target="_blank"
              >
                @mojombo
              </a>
            </h1>
            <a
              href="/profile/mojombo"
            >
              See profile
            </a>
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
