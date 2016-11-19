﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DomainModel
{
    public class PostAnswer : Posts
    {
        public string Title { get; set; }
        //public string UserName { get; set; }
        [ForeignKey("PostsId")]
        public virtual Answers Answers { get; set; }

    }
}
