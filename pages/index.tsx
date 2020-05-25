import { GetStaticProps } from 'next'
import { City } from '../interfaces'
import { cityData } from '../utils/city-data'
import Layout from '../components/Layout'
import List from '../components/List'
import styled from 'styled-components'

type Props = {
  items: City[]
}

const About = styled.div`
  font-size: 2rem;
  width: 60rem;
  max-width:100%;
  line-height:1.5;
  padding: 4rem 0;
  a{
    color:${p=>p.theme.colors.text}
  }
  @media (max-width: ${p=>p.theme.breakpoints.l}) {
    font-size: 1.5rem;
  }
  @media (max-width: ${p=>p.theme.breakpoints.m}) {
    font-size: 1.2rem;
  }
  @media (max-width: ${p=>p.theme.breakpoints.s}) {
    font-size: 1rem;
  }
`
const Note = styled.div`
  color: #444;
  padding-top:4rem;
  font-size: 0.6em;
  a{
    color: #444
  }
  hr{
    border: 1px solid #444
  }
`

const WithStaticProps = ({ items }: Props) => (
  <Layout title="100,000">
    <List items={items} />
    <About>In May 2020, the total number of lives lost from the coronavirus outbreak in the United States crossed one hundred thousand - an unimaginable number. 
      This page aims to make this number more concrete by showing cities in the US with population close to 100,000.
    The <a href="https://www.nytimes.com/interactive/2020/05/24/us/us-coronavirus-deaths-100000.html" target="_blank">people who lost their lives</a> in the last couple of months would be able to fill any of these cities with life.
      <Note>
      <hr/>
      Made by <a href="https://hrescak.com" target="_blank">Matej</a>. Data from <a href="https://www.census.gov/data/tables/time-series/demo/popest/2010s-total-cities-and-towns.html" target="_blank"> census.gov</a>. Source on <a href="https://www.github.com/hrescak/onehundredthousand">Github</a>. Wash hands. Cover your face. Save lives.
      </Note>
    </About>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const items: City[] = cityData
  return { props: { items } }
}

export default WithStaticProps
