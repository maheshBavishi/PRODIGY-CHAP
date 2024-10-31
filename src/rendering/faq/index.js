import React, { useState } from 'react'
import styles from './faq.module.scss';
import PlusIcon from '@/shared/components/icons/plusIcon';
import classNames from 'classnames';

const faqContent = [
    {
        question: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem`,
        answer: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae abillo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae abillo inventore`
    },
    {
        question: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem`,
        answer: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae abillo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae abillo inventore`
    }, 
    {
        question: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem`,
        answer: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae abillo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae abillo inventore`
    }, 
    {
        question: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem`,
        answer: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae abillo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae abillo inventore`
    }, 
    {
        question: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem`,
        answer: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae abillo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae abillo inventore`
    }, 
    {
        question: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem`,
        answer: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae abillo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae abillo inventore`
    }, 
]
export default function Faq() {
    const [toogle, setToogle] = useState(false);
    const handleToggle = (index) => {
        if (toogle === index) {
            setToogle(null);
        } else {
            setToogle(index);
        }
    };
    return (
        <div className={styles.faqsectionAlignment}>
            <div className='container'>
                <div className={styles.title}>
                    <h2>FAQ
                    </h2>
                    <p>
                    Feel free to see the most commonly asked questions about US visa(s).
                    </p>
                </div>
                <div className={styles.allfaqSectionAlignment}>
                    {faqContent?.map((item, i) => {
                        return (

                            <div key={i} className={classNames(styles.faq, toogle === i ? styles.faqtoogle : "")}>
                                <div className={styles.faqHeader} >
                                    <p>
                                        {item?.question}
                                    </p>
                                    <div onClick={() => handleToggle(i)}>
                                        <PlusIcon />
                                    </div>
                                </div>
                                <div className={classNames(styles.faqbody, toogle === i ? styles.show : styles.hide)}>
                                    <div className={styles.sapcing}>
                                        <p>
                                            {item?.answer}
                                        </p></div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}
