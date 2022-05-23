import styles from "./CandidateCard.module.css";

function CandidateCard({image,name,company,title,salary}) {
  return (
    <div data-testid="candidate-container" className={styles.container}>
      <img src={image} alt="logo" width="100px" height="100px" />
      <div>
        <div>Name:{name}</div>
        <div>Title:{title} & Company Name:{company}</div>
      </div>
      <div>$ Salary:{salary}</div>
    </div>
  );
}

export default CandidateCard;
