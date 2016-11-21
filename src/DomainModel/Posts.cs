﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DomainModel
{
    public class Posts
    {
        [Key]
        public int PostsId { get; set; }
        public int PostTypeId { get; set; }
        public DateTime creationDate { get; set; }
        public int Score { get; set; }
        public string Body { get; set; }

        [ForeignKey("CombinedUsers")]
        public int OwnerUserId { get; set; }

        
        public virtual Questions Question { get; set; }

        //public virtual CombinedUsers CombinedUsers { get; set; }

    }
}
