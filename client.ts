import {createClient} from 'next-sanity'

export default createClient({
  projectId: 'tiawcq9c', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: "2023-05-03"
})