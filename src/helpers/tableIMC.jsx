export default function tableIMC() {
  return (
    <table id="0" className="w-full border">
      <thead>
        <tr>
          <th>ICM</th>
          <th>CLASSIFICAÇÃO</th>
          <th>OBESIDADE (GRAU)</th>
        </tr>
      </thead>
      <tbody className="text-center">
        <tr id="1">
          <td>MENOR QUE 18,5</td>
          <td>MAGREZA</td>
          <td>0</td>
        </tr>
        <tr id="2">
          <td>ENTRE 18,5 E 24,9</td>
          <td>NORMAL</td>
          <td>0</td>
        </tr>
        <tr id="3">
          <td>ENTRE 25,0 E 29,9</td>
          <td>SOBREPESO</td>
          <td>I</td>
        </tr>
        <tr id="4">
          <td>ENTRE 30,0 E 39,9</td>
          <td>OBESIDADE</td>
          <td>II</td>
        </tr>
        <tr id="5">
          <td>MAIOR QUE 40,0</td>
          <td>OBESIDADE GRAVE</td>
          <td>III</td>
        </tr>
      </tbody>
    </table>
  );
}
