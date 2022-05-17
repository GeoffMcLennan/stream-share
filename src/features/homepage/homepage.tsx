import { Link } from "react-router-dom";

export function Homepage() {
  return (
    <div>
      <h1>Stream Share</h1>
      <p><Link to='play'>Play</Link></p>
      <p><Link to='/a/ABM_3V6vKQqt6SGXufxUiY2mTL'>Album 1</Link></p>
    </div>
  )
}