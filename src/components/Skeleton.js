import ContentLoader from 'react-content-loader'

const MyLoader = (props) => (
  <ContentLoader
    rtl
    speed={2}
    width={400}
    height={150}
    viewBox="0 0 400 150"
    backgroundColor="#0a0a0a"
    foregroundColor="#f8f7f7"
    {...props}
  >
    <rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
    <rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
    <rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
    <rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
  </ContentLoader>
)

export default MyLoader
