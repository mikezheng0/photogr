using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Photogr.Services.Models
{
    public class Event
    {
        public int EventID { get; set; }
        [Required]
        [StringLength(255)]
        public string Title { get; set; }
        public string Description { get; set; }
        public string ImagePath { get; set; }
        public Int64 Clicks { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime LastUpdatedDate { get; set; }
        public int UserID { get; set; }
        public User User { get; set; }
    }
}
