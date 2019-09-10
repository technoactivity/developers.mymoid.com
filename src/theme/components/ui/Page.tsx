import * as React from 'react'
import { Fragment, SFC } from 'react'
import { PageProps, useConfig, useDocs } from 'docz'
import { useWindowSize } from 'react-use'
import styled from 'styled-components'

import { Container } from './Container'
import { Sidebar, Topbar } from '../shared'
import { breakpoints } from '../../styles/responsive'

const Wrapper = styled.div`
  flex: 1;
  margin-top: 60px;

  ${Container} {
    display: flex;
    min-height: 100%;

    ${p =>
      p.theme.mq({
        padding: ['0 10px', '0 20px'],
      })}
  }
`

const Document = styled.div`
  max-width: 100%;

  ${p =>
    p.theme.mq({
      paddingTop: ['10px', '30px'],
    })}
`

export const Page: SFC<PageProps> = ({ children, doc, location }) => {
  const { parent, fullpage, name, edit = true, link } = doc
  const { repository } = useConfig()
  const docs = useDocs()
  const { width } = useWindowSize()
  const isAtLeastDesktop = width > breakpoints.tablet
  // const showSidebar = Boolean(parent)
  const showSidebar = true
  const menuParent = parent || doc.name
  const pathname = location && location.pathname

  const currentDoc = docs.find(({ route }) => route === location.pathname)

  return (
    <React.Fragment>
      <Topbar />
      <Wrapper>
        {!isAtLeastDesktop && (
          <Sidebar menu={menuParent} pathname={pathname} mobile />
        )}
        {fullpage ? (
          <Fragment>{children}</Fragment>
        ) : (
          <Container>
            {isAtLeastDesktop && showSidebar && (
              <Sidebar menu={menuParent} pathname={pathname} />
            )}
            <Document>
              {children}
              {edit && (
                <div style={{ marginTop: 80 }}>
                  <a href={currentDoc.link} target="blank">
                    Edit this page
                  </a>
                </div>
              )}
            </Document>
          </Container>
        )}
      </Wrapper>
    </React.Fragment>
  )
}
