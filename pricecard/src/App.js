import './App.css';
import PriceCard from './PriceCard';

function App() {
  let data = [
    {
      plan:"FREE",
      price:"0",
      user:"Single User",
      isuser:true,
      storage:"5GB",
      isstorage:true,
      publicProjects:"Unlimited Public Projects",
      isPublicProjects:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProjects:"Unlimited Private Projects",
      isprivateProjects:false,
      phoneSuport:"Dedicated Phone Support",
      isPhoneSuport:false,
      subDomain:"Free Subdomain",
      issubdomain:false,
      reports:"Monthly status Reports",
      isReports:false
    },
    {
      plan:"PLUS",
      price:"9",
      user:"5 Users",
      isuser:true,
      storage:"50GB",
      isstorage:true,
      publicProjects:"Unlimited Public Projects",
      isPublicProjects:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProjects:"Unlimited Private Projects",
      isprivateProjects:true,
      phoneSuport:"Dedicated Phone Support",
      isPhoneSuport:true,
      subDomain:"Free Subdomain",
      issubdomain:true,
      reports:"Monthly status Reports",
      isReports:false
    },
    {
      plan:"PRO",
      price:"49",
      user:"Unlimited Users",
      isuser:true,
      storage:"150GB",
      isstorage:true,
      publicProjects:"Unlimited Public Projects",
      isPublicProjects:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProjects:"Unlimited Private Projects",
      isprivateProjects:true,
      phoneSuport:"Dedicated Phone Support",
      isPhoneSuport:true,
      subDomain:"Unlimited Free Subdomains",
      issubdomain:true,
      reports:"Monthly status Reports",
      isReports:true
    }
  ]
  return <>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
      
      {
        data.map((ele,i) => {
          return <PriceCard data={ele} key={i}/>
        })
      }
      
    </div>
  </div>
</section>
  </>
}

export default App;
