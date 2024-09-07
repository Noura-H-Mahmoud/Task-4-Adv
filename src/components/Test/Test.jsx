import './Test.css'
import Title from '../Title/Title'
import LaboratoryBox from '../LaboratoryBox/LaboratoryBox'
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaBriefcaseMedical, FaStaffSnake, FaLungs } from "react-icons/fa6";

export default function Test({ image, altImage, textTest }) {
  const itemData = [
    {
      h3: 'Lorem Ipsum',
      icon: <FaHandHoldingMedical />,
      boxText: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'
    },
    {
      h3: 'Nemo Enim',
      icon: <FaBriefcaseMedical />,
      boxText: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque'
    },
    {
      h3: 'Dine Pad',
      icon: <FaStaffSnake />,
      boxText: 'Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis'
    },
    {
      h3: 'Tride clov',
      icon: <FaLungs />,
      boxText: 'Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit non aspernatur odit amet. Et eligendi'
    }
  ]
  return (
    <div className='d-flex flex-column flex-lg-row gap-5 '>
      <div>
        <img src={image} alt={altImage} className='w-100 h-100 object-fit-cover' />
      </div>
      <div className='w-60container'>
        <Title title='Enim quis est voluptatibus aliquid consequatur fugiat' withAfter={true} withLineStart={true} />
        <p className='mt-4 mb-5'>{textTest}</p>
        <LaboratoryBox items={itemData} />
      </div>
    </div>
  )
}
