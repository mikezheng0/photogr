﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Photogr.Services.Models
{
    public class Photo
    {
        public int PhotoID { get; set; }
        [Required]
        [StringLength(255)]
        public string FileName { get; set; }
        public string Description { get; set; }
        public string Title { get; set; }
        public Int64 Clicks { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime LastUpdatedDate { get; set; }
    }
}
