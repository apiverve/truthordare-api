using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.TruthorDare
{
    /// <summary>
    /// Query options for the Truth or Dare API
    /// </summary>
    public class TruthorDareQueryOptions
    {
        /// <summary>
        /// Prompt type: truth, dare, or random
        /// Example: random
        /// </summary>
        [JsonProperty("type")]
        public string Type { get; set; }

        /// <summary>
        /// Include adult/spicy prompts
        /// Example: false
        /// </summary>
        [JsonProperty("adult")]
        public string Adult { get; set; }
    }
}
